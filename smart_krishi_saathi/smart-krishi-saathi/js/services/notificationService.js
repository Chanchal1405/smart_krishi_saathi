/* =========================================================================
   Notification Service
   -------------------------------------------------------------------------
   Three honestly-distinguished tiers, so the UI never claims more than
   actually happened:
     1. "in-app"   — always available, written straight into NOTIFS/Firestore.
     2. "local"    — a browser Notification scheduled on this device via
                     setTimeout/localStorage; lost if the browser/tab closes.
     3. "sent"     — only used when a real push/SMS/email provider is
                     configured AND confirms delivery (see js/config.js).
                     With no provider configured, this tier is never used.
   ========================================================================= */
window.KSNotify = (function () {
  const PREFS_KEY = "ks_notif_prefs";
  const defaultPrefs = { calendarReminders: true, buyerInquiries: true, weatherAlerts: true, expertReplies: true, browserPush: false };

  function getPrefs() { try { return { ...defaultPrefs, ...JSON.parse(localStorage.getItem(PREFS_KEY) || "{}") }; } catch (e) { return defaultPrefs; } }
  function savePrefs(p) { localStorage.setItem(PREFS_KEY, JSON.stringify(p)); }

  /** Only call this from a user gesture (e.g. a button click), per browser
   * requirements — never ask for permission automatically on page load. */
  async function requestBrowserPermission() {
    if (!("Notification" in window)) return "unsupported";
    if (Notification.permission === "granted") return "granted";
    if (Notification.permission === "denied") return "denied";
    return await Notification.requestPermission();
  }

  /** Adds an in-app notification (always works, no permission needed). */
  function addInApp(list, text, tier = "in-app") {
    const item = { id: Date.now(), text, read: false, tier, createdAt: new Date().toISOString() };
    list.unshift(item);
    return item;
  }

  /** Schedules a locally-fired browser notification (tier "local") for a
   * calendar task, IF the browser supports it, permission was granted, and
   * the relevant preference is on. Silently degrades to in-app-only
   * otherwise — never claims a delivery that did not happen. */
  function scheduleLocalReminder(text, whenMs) {
    const prefs = getPrefs();
    if (!prefs.browserPush) return false;
    if (!("Notification" in window) || Notification.permission !== "granted") return false;
    const delay = Math.max(0, whenMs - Date.now());
    // Demo-scale delay cap so a college demo doesn't leave timers running for months.
    if (delay > 1000 * 60 * 60 * 24 * 7) return false;
    setTimeout(() => {
      try { new Notification("Smart Krishi Saathi", { body: text, icon: "icons/icon-192.png" }); } catch (e) {}
    }, delay);
    return true;
  }

  /** Push/SMS/email — only attempts real delivery if a provider is
   * configured in js/config.js. Otherwise resolves {sent:false} so callers
   * must not show a "sent" success message. */
  async function sendExternal(channel, to, text) {
    const cfg = (window.KS_CONFIG && window.KS_CONFIG.notifications) || {};
    const providerReady = channel === "sms" ? cfg.smsProviderConfigured : channel === "email" ? cfg.emailProviderConfigured : false;
    if (!providerReady) return { sent: false, reason: "No " + channel + " provider configured — message kept in-app only." };
    // Real delivery would call a backend/Cloud Function here that holds the
    // provider's secret key. Left unimplemented until a provider is chosen.
    return { sent: false, reason: "Provider configured flag is set but no backend endpoint is wired up yet." };
  }

  return { getPrefs, savePrefs, requestBrowserPermission, addInApp, scheduleLocalReminder, sendExternal };
})();
