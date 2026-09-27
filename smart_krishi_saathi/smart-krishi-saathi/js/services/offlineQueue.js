/* =========================================================================
   Offline Sync Queue
   -------------------------------------------------------------------------
   For non-sensitive, locally-editable records (calendar tasks, soil
   records, etc.) made while offline. Writes always land in localStorage
   immediately (so the UI works offline). When a write to Firestore fails
   or the browser is offline, the change is queued here in IndexedDB and
   retried when connectivity returns. This does NOT queue or fake live
   weather, market prices, or AI diagnoses — those simply stay unavailable
   offline, as the project brief requires.
   ========================================================================= */
window.KSOfflineQueue = (function () {
  const DB_NAME = "ks_offline_queue";
  const STORE = "pending";
  let dbPromise = null;

  function openDb() {
    if (dbPromise) return dbPromise;
    dbPromise = new Promise((resolve, reject) => {
      if (!("indexedDB" in window)) { reject(new Error("IndexedDB unsupported")); return; }
      const req = indexedDB.open(DB_NAME, 1);
      req.onupgradeneeded = () => req.result.createObjectStore(STORE, { keyPath: "id", autoIncrement: true });
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
    return dbPromise;
  }

  async function enqueue(key, value) {
    try {
      const db = await openDb();
      await new Promise((resolve, reject) => {
        const tx = db.transaction(STORE, "readwrite");
        tx.objectStore(STORE).add({ key, value, queuedAt: Date.now() });
        tx.oncomplete = resolve; tx.onerror = () => reject(tx.error);
      });
      window.dispatchEvent(new CustomEvent("ks-queue-changed"));
    } catch (e) { console.warn("Could not queue offline change (will rely on next full save):", e); }
  }

  async function pending() {
    try {
      const db = await openDb();
      return await new Promise((resolve, reject) => {
        const tx = db.transaction(STORE, "readonly");
        const req = tx.objectStore(STORE).getAll();
        req.onsuccess = () => resolve(req.result);
        req.onerror = () => reject(req.error);
      });
    } catch (e) { return []; }
  }

  async function clearItem(id) {
    try {
      const db = await openDb();
      await new Promise((resolve, reject) => {
        const tx = db.transaction(STORE, "readwrite");
        tx.objectStore(STORE).delete(id);
        tx.oncomplete = resolve; tx.onerror = () => reject(tx.error);
      });
    } catch (e) {}
  }

  /** Call this on "online" events and right after login. Best-effort:
   * conflicting edits are resolved last-write-wins (the queued write is
   * simply re-applied), which is safe for this app's non-critical,
   * single-user records (calendar/soil/etc). */
  async function flush() {
    if (!navigator.onLine || !window.KS || window.KS.demoMode || !window.KS.currentUser) return { synced: 0, failed: 0 };
    const items = await pending();
    let synced = 0, failed = 0;
    for (const item of items) {
      try {
        const ok = await window.KS.Data.save(item.key, item.value);
        if (ok) { await clearItem(item.id); synced++; } else { failed++; }
      } catch (e) { failed++; }
    }
    window.dispatchEvent(new CustomEvent("ks-queue-changed"));
    return { synced, failed };
  }

  window.addEventListener("online", () => { flush(); });

  return { enqueue, pending, flush };
})();
