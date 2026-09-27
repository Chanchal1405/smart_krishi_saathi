/* =========================================================================
   Smart Krishi Saathi — Firebase Service Layer
   -------------------------------------------------------------------------
   Wraps Firebase Auth + Firestore + Storage behind a small API (window.KS).
   If js/config.js has no firebase.apiKey configured, every method below
   falls back to the app's original localStorage-only behaviour, so the
   app works identically to the pre-Firebase build with zero setup.

   Loaded via the Firebase "compat" CDN SDKs (see index.html) so no bundler
   is required — this stays plain HTML/CSS/JS as requested.
   ========================================================================= */
(function () {
  const cfg = (window.KS_CONFIG && window.KS_CONFIG.firebase) || {};
  const configured = window.KS_isConfigured(cfg.apiKey) && typeof firebase !== "undefined";

  const KS = {
    demoMode: !configured,
    ready: false,           // becomes true once auth state has been checked once
    currentUser: null,      // Firebase user object, or null
    _authListeners: [],
  };

  /* ---------------- Local (always-available) cache helpers ---------------- */
  // Identical semantics to the original app.js save()/load() so existing
  // code keeps working even when Firebase is not configured.
  function localSave(k, v) { localStorage.setItem(k, typeof v === "string" ? v : JSON.stringify(v)); }
  function localLoad(k, def) { try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : def; } catch (e) { return def; } }

  const COLLECTIONS = ["ks_farmer", "ks_calendar", "ks_listings", "ks_profit", "ks_tickets",
    "ks_notifs", "ks_bookmarks", "ks_soil", "ks_waste", "ks_family"];

  if (!configured) {
    // ---- Pure demo mode: identical behaviour to the original build ----
    KS.init = async function () { KS.ready = true; return KS; };
    KS.Auth = {
      registerWithEmail: async () => { throw new Error("Firebase is not configured. Use Explore Demo, or configure js/config.js for real accounts."); },
      loginWithEmail: async () => { throw new Error("Firebase is not configured. Use Explore Demo, or configure js/config.js for real accounts."); },
      logout: async () => { KS.currentUser = null; },
      onAuthChange: (cb) => { KS._authListeners.push(cb); },
    };
    KS.Data = {
      save: (k, v) => { localSave(k, v); return Promise.resolve(true); }, // fire-and-forget compatible
      load: localLoad,
      hydrate: async () => {}, // nothing to pull from a server
    };
    KS.Storage = {
      uploadFile: async () => { throw new Error("Firebase Storage is not configured — image stays local to this browser only."); },
    };
    window.KS = KS;
    return;
  }

  /* ---------------------------- Live Firebase mode ---------------------------- */
  firebase.initializeApp(cfg);
  const auth = firebase.auth();
  const db = firebase.firestore();
  const storage = firebase.storage();

  auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL).catch(() => {});

  KS.init = function () {
    return new Promise((resolve) => {
      auth.onAuthStateChanged((user) => {
        KS.currentUser = user;
        KS.ready = true;
        KS._authListeners.forEach((cb) => cb(user));
        resolve(KS);
      });
    });
  };

  function userDocRef() {
    if (!KS.currentUser) throw new Error("Not signed in.");
    return db.collection("farmers").doc(KS.currentUser.uid);
  }

  KS.Auth = {
    /** Registers a new farmer account. Password is handled entirely by
     * Firebase Auth — it is never written to Firestore or localStorage. */
    registerWithEmail: async function (email, password, profile) {
      const cred = await auth.createUserWithEmailAndPassword(email, password);
      await db.collection("farmers").doc(cred.user.uid).set({
        ...profile,
        role: "farmer",
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
      return cred.user;
    },
    loginWithEmail: async function (email, password) {
      const cred = await auth.signInWithEmailAndPassword(email, password);
      return cred.user;
    },
    logout: async function () { await auth.signOut(); },
    onAuthChange: (cb) => { KS._authListeners.push(cb); },
    /** Returns {role:"farmer"|"operator"|"admin", ...profile} for the
     * signed-in user, read from Firestore (never trust a client-side flag
     * for admin access — see firestore.rules for the real enforcement). */
    getProfile: async function () {
      const snap = await userDocRef().get();
      return snap.exists ? snap.data() : null;
    },
  };

  KS.Data = {
    /** Dual-write: always updates localStorage immediately (so the UI,
     * which reads synchronously, never has to wait on the network), then
     * best-effort syncs to Firestore in the background. Returns a promise
     * that resolves true/false so callers that care about sync outcome
     * (e.g. offline queueing) can await it. */
    save: async function (key, value) {
      localSave(key, value);
      if (!KS.currentUser) return false;
      try {
        await userDocRef().collection("data").doc(key).set({
          value: JSON.stringify(value),
          updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
        });
        return true;
      } catch (e) {
        console.warn("Cloud sync failed for", key, "— will retry via offline queue.", e);
        if (window.KSOfflineQueue) window.KSOfflineQueue.enqueue(key, value);
        return false;
      }
    },
    load: localLoad,
    /** Pulls every known collection down from Firestore into localStorage.
     * Call once right after a successful login so the UI (which only reads
     * localStorage synchronously) shows the farmer's real saved data. */
    hydrate: async function () {
      if (!KS.currentUser) return;
      const snap = await userDocRef().collection("data").get();
      snap.forEach((doc) => {
        const raw = doc.data().value;
        try { localStorage.setItem(doc.id, raw); } catch (e) {}
      });
    },
  };

  KS.Storage = {
    /** Uploads a File (e.g. crop leaf photo, soil report) under this
     * farmer's private folder and returns a download URL. */
    uploadFile: async function (folder, file) {
      if (!KS.currentUser) throw new Error("Not signed in.");
      const MAX_BYTES = 8 * 1024 * 1024; // 8 MB
      if (file.size > MAX_BYTES) throw new Error("File too large (max 8 MB).");
      if (!/^image\//.test(file.type)) throw new Error("Only image files are supported here.");
      const path = `farmers/${KS.currentUser.uid}/${folder}/${Date.now()}_${file.name}`;
      const ref = storage.ref().child(path);
      const task = await ref.put(file);
      return await task.ref.getDownloadURL();
    },
  };

  window.KS = KS;
})();
