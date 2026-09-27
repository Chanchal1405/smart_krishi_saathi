# Smart Krishi Saathi

AI-powered farmer advisory, agri value chain and crop processing recommendation
platform for Indian village farmers — plain HTML, CSS and JavaScript, with an
optional Firebase backend. Runs fully in **demo mode** with zero setup, and
upgrades feature-by-feature to live data as you add API keys.

## 1. Project overview

Smart Krishi Saathi gives a smallholder farmer one app for: crop advisory,
an AI-assisted "Crop Doctor", weather + agri risk alerts, mandi market
prices, produce listings/buyers, a processing-cost planner, storage &
transport directory, a profit calculator, soil health records, a crop-waste
exchange, government scheme lookup, expert support tickets, a
family/shared-account view, an admin dashboard, offline access, and a
Hindi/Marathi/English voice + text assistant.

**Honesty principle throughout the app:** every feature that isn't backed by
a real, configured data source is visibly tagged **Demo** or **Sample**, and
no screen ever claims a live result, a sent message, or an AI diagnosis
unless that is actually true. See "Demo mode vs. live mode" below.

## 2. Technologies used, and why

| Tech | Why |
|---|---|
| Plain HTML/CSS/JS (no framework, no build step) | Runs by double-clicking `index.html`; easy for a college demo, judges, or low-resource deployment; no npm/webpack required |
| Firebase Authentication | Free tier, well-documented, avoids running/hosting a custom auth server |
| Cloud Firestore | Real-time-capable NoSQL store that fits the app's document-shaped data (profiles, calendar, tickets, etc.) with strong client SDK support |
| Firebase Storage | For crop-disease photos and soil-report uploads, same project/billing as Auth+Firestore |
| Firebase Security Rules | Enforces "a farmer can only see their own data" and real admin/operator roles **server-side**, so the frontend can never be tricked into exposing private data |
| Service Worker + Cache API + IndexedDB | Installable PWA, offline app shell, and an offline write-queue, without any backend involvement |
| External weather / market-price APIs (pluggable) | Kept behind a small service-layer abstraction so any provider can be swapped in without touching UI code |

No Django, no Node backend, no bundler — exactly as requested.

## 3. Folder structure

```
smart-krishi-saathi/
├── index.html                     # App shell; loads config, Firebase SDK, services, app.js
├── manifest.json                  # PWA manifest
├── sw.js                          # Service worker — offline app-shell caching
├── firestore.rules                # Firestore Security Rules (real access control)
├── storage.rules                  # Firebase Storage Security Rules
├── ADMIN_SETUP.md                 # How to securely create the first administrator
├── icons/                         # Included 192x192 / 512x512 PWA icons
├── css/
│   └── styles.css                 # All styling (unchanged from the original build)
└── js/
    ├── config.js                  # Central place for Firebase + API keys (no secrets)
    ├── app.js                     # All UI/state/view logic (original file, extended)
    ├── firebase/
    │   └── firebaseService.js     # Auth + Firestore + Storage wrapper, with demo-mode fallback
    └── services/
        ├── weatherService.js      # Live weather API client + sample fallback
        ├── marketService.js       # Live mandi price API client + sample fallback
        ├── aiCropDoctorService.js # Calls your backend for real AI diagnosis, or simulates one
        ├── notificationService.js # In-app / local / (future) push-SMS-email notifications
        └── offlineQueue.js        # IndexedDB queue that retries failed cloud writes when back online
```

## 4. Installation & running locally

No build step or server-side code is required.

1. **Quickest:** open `index.html` directly in a browser.
2. **Recommended** (service worker / PWA install need a real HTTP origin, not `file://`):
   ```bash
   cd smart-krishi-saathi
   python3 -m http.server 8080
   # open http://localhost:8080
   ```
   or the VS Code "Live Server" extension, or `npx serve`.
3. The required PWA icons are already included: `icons/icon-192.png` and `icons/icon-512.png`.

This works exactly as-is with **no Firebase project and no API keys** — every
feature runs in demo mode using `localStorage`, as in the original build.

## 5. Firebase configuration (optional, for live accounts + cloud sync)

1. Create a Firebase project at <https://console.firebase.google.com>.
2. Enable **Authentication → Email/Password**, **Firestore Database**, and **Storage**.
3. Firebase Console → Project settings → General → "Your apps" → add a Web app → copy the config object.
4. Paste those values into `js/config.js` → `KS_CONFIG.firebase`.
5. Deploy the security rules (requires the Firebase CLI):
   ```bash
   npm install -g firebase-tools
   firebase login
   firebase init firestore storage   # point at firestore.rules / storage.rules in this folder
   firebase deploy --only firestore:rules,storage
   ```
6. See `ADMIN_SETUP.md` for how to create the first administrator account — this **cannot** be done from the app UI by design (that's the whole point of real role-based security).

With this configured, the login screen switches from "Explore Demo" to real
email/password **Create Account / Sign In**, farm records sync to Firestore,
crop-photo/soil-report uploads go to Firebase Storage, and the Admin
Dashboard's access is genuinely enforced by `firestore.rules` rather than a
frontend toggle.

## 6. External API configuration (optional, per feature)

All of these are independent — configure any subset in `js/config.js`, the rest stay in demo mode:

| Feature | Config key | Example provider | Notes |
|---|---|---|---|
| Weather & alerts | `KS_CONFIG.weather.apiKey` | OpenWeatherMap | Free tier; safe to call directly from the browser |
| Market prices | `KS_CONFIG.market.apiKey` | data.gov.in (Agmarknet) | Free registration at data.gov.in; safe to call directly from the browser |
| AI Crop Doctor | `KS_CONFIG.aiCropDoctor.endpoint` | Your own Cloud Function calling Plant.id / a custom model | **Must** be your own backend — never put an image-classification provider's secret key in frontend JS |
| Voice assistant / LLM | `KS_CONFIG.assistantLLM.endpoint` | Your own Cloud Function calling an LLM API | Same reasoning — secret key stays server-side |
| Push/SMS/email | `KS_CONFIG.notifications.*` | Firebase Cloud Messaging / MSG91 / Twilio / SendGrid | Flags only; the actual send calls are left unimplemented until you pick a provider (see `notificationService.js`) |

Every one of these has a documented, working demo fallback — the app is
fully functional and honest with zero keys configured.

## 7. Demo mode vs. live mode — what "Demo" actually means here

- **Weather:** sample 5-day forecast and one example alert, clearly labelled "Sample", until a weather API key is set.
- **Market prices:** sample mandi price table (min/max/modal), labelled "Sample", until a market API key is set.
- **Crop Doctor:** a simulated result built from a small built-in disease knowledge base, always labelled "Demo — simulated, not a real AI diagnosis" and shown with a randomized "confidence" and an uncertainty warning, until `aiCropDoctor.endpoint` is set.
- **Voice assistant:** answers from a small offline keyword knowledge base, labelled as such in the chat log, until `assistantLLM.endpoint` is set.
- **Notifications:** in-app + optionally locally-scheduled browser reminders only; a "sent via SMS/email/push" message is never shown unless a real provider confirms delivery.
- **Admin access:** without Firebase configured, "Admin Mode" is a Settings toggle that only shows/hides the nav item in your own browser — clearly labelled non-secure. With Firebase configured, admin access is enforced server-side by `firestore.rules` based on a `role` field that only an existing admin can set (see `ADMIN_SETUP.md`).

## 8. How to test the features

There is no automated test suite (none existed in the original project, and
none was added, to keep the "no build step" constraint). To verify manually:

1. Serve the folder as in section 4, open it in a browser, and register/"Explore Demo".
2. Walk through each nav tab; every list/form in the app either saves to
   `localStorage` immediately (visible on refresh) or fetches from the
   configured service layer (visible via the Network tab).
3. Open DevTools → Application → Service Workers to confirm `sw.js`
   registered, then use DevTools → Network → "Offline" to confirm the app
   shell still loads and your saved records are still visible, while
   Weather/Market/Doctor correctly show an error/empty state rather than
   fabricated data.
4. With a Firebase project configured: register two different accounts and
   confirm neither can see the other's calendar/soil/listing data (this is
   what `firestore.rules` prevents), then promote one to `admin` per
   `ADMIN_SETUP.md` and confirm the Admin tab's management actions work only
   for that account.

**What was actually verified in this session:** every JavaScript file was
checked with `node --check` (full syntax validation) and manually
cross-referenced for matching element IDs between each view's HTML and its
event-wiring code. **What was *not* verified:** this container has no
browser/network access, so no live in-browser run, no real Firebase project,
and no external API call were actually exercised. Please do the manual walk-through
above before a live demo.

## 9. Which features need real API credentials

Fully functional with zero configuration (unchanged from the original build,
still localStorage-based): registration/profile (demo), Crop Advisory,
Farm Calendar, Sell Produce listings, Processing Planner, Storage &
Transport directory, Profit Calculator, Soil Health records, Crop Waste
Exchange, Scheme bookmarks, Expert ticket submission, Family helpers,
Opportunity Finder.

Needs credentials to go from **Demo/Sample** to **Live**:
- Firebase project → real accounts, cross-device sync, real security rules, Storage uploads
- Weather API key → live forecast & alerts
- Market-price API key → live mandi prices
- Your own backend endpoint + an image-classification provider → real Crop Doctor diagnosis
- Your own backend endpoint + an LLM provider → real voice/text assistant answers
- A push/SMS/email provider (with a backend) → real notification delivery

## 10. What was completed in this session (Stage 1 + Stage 2)

**Stage 1 — new functionality:**
- Firebase Authentication (email/password), Firestore (per-user data +
  admin-managed `publicData`), and Storage, all with automatic demo-mode
  fallback and no secrets committed (`js/config.js`, `js/firebase/firebaseService.js`)
- Real Firestore Security Rules and Storage Rules enforcing per-farmer
  privacy and genuine role-based admin/operator access (`firestore.rules`,
  `storage.rules`, `ADMIN_SETUP.md`)
- Crop Doctor: real backend-integration point, image validation, confidence
  display, uncertainty warning, "Contact an Expert" hand-off, and an
  honestly-labelled simulated fallback (`js/services/aiCropDoctorService.js`)
- Weather dashboard: live-API integration point with a labelled sample
  fallback, derived rain/heat alerts, last-updated timestamp
  (`js/services/weatherService.js`)
- Market prices: live-API integration point (data.gov.in/Agmarknet-shaped),
  min/max/modal columns, crop + mandi search, labelled sample fallback
  (`js/services/marketService.js`)
- Admin dashboard: functional search/filter, delete-with-confirmation for
  tickets and listings, and an add/edit/delete scheme manager, plus a
  real vs. demo security status banner
- Notification preferences, browser-permission-gated local reminders, and
  an integration-ready (but honestly unconnected) push/SMS/email layer
  (`js/services/notificationService.js`)
- Offline sync queue: IndexedDB-backed retry queue for cloud writes made
  while offline, flushed automatically on reconnect (`js/services/offlineQueue.js`)
- Voice assistant: LLM-backend integration point, loading/error states,
  clear "demo knowledge base" labelling when no backend is configured
- Expanded English/Hindi/Marathi translations for all newly added UI text
- Soil Health: optional report-photo upload to Firebase Storage when configured

**Stage 2 — integration & polish (performed within this session's limits):**
- Every JavaScript file re-checked with `node --check` after each change
- Cross-referenced element IDs between HTML templates and event-wiring code
- Fixed an object-literal duplication bug introduced while expanding translations
- Unified the login/registration/session-restore code paths into one
  `hydrateAllFromCloud()` function to avoid divergent behaviour
- Switched all script tags to `defer` for correct, non-blocking load order
- Updated the service worker's cached asset list to include the new files
- Rewrote this README

**Not done, and why:** a full in-browser regression test (Stage 2's "test
all existing and new features" checklist) was not literally executed — this
environment has no browser and no network egress, so no real Firebase
project, weather/market API, or backend endpoint was exercised end-to-end.
The "How to test the features" section above is the recommended manual
pass before a live demo or submission.

## 11. Known limitations & future improvements

- No automated tests; all verification is manual (see section 8).
- The Admin Dashboard's farmer list is still a small static sample — a
  full live roster needs an admin-only Cloud Function query against
  Firestore (deliberately not fetched client-side, to avoid ever exposing
  one farmer's data to another).
- Push/SMS/email sending is stubbed (flags + honest "not sent" fallback
  only) until a specific provider is chosen and a backend function written.
- Translation coverage was substantially expanded but not every string in
  every view has been localized; English strings remain in a few
  less-visited screens (Sell Produce buyer directory copy, some button
  labels in Processing/Storage/Waste/Family views).
- Offline conflict resolution is last-write-wins, adequate for this app's
  single-user, non-critical records but not suitable for concurrently
  edited shared data without further design.
- No CI/build pipeline exists or was added, consistent with the "no heavy
  backend / no bundler" constraint in the project brief.


## 12. College-demo reliability update — September 27, 2026

The project was updated from the supplied existing prototype rather than rebuilt.

### Verified / fixed
- Preserved the existing single-page UI, navigation, demo data, Firebase layer, Crop Doctor demo, calculators, notifications, translations, and admin/demo features.
- All JavaScript files pass `node --check` syntax validation.
- Added the missing PWA icons:
  - `icons/icon-192.png`
  - `icons/icon-512.png`
- Weather demo data is explicitly labelled **“Sample Weather – Not Live”**.
- Market demo data is explicitly labelled **“DEMO DATA – Not Current Market Prices.”**
- Added localStorage caching for the last successfully loaded weather and market results, so previously viewed data can remain visible when the device goes offline.
- Kept live weather/market calls optional; blank API configuration continues to use local sample data.
- Crop Doctor continues to use the existing simulated diagnosis and validates JPG/PNG/WEBP uploads up to 6 MB. The service remains ready for a future backend AI endpoint.
- Kept notification delivery honest: in-app notifications work locally; browser reminders are optional; SMS/email/push remain unimplemented unless a real provider/backend is added.
- Expanded mobile CSS for stacked form fields, horizontally scrollable tables, smaller navigation controls, and a mobile-friendly voice panel.
- Confirmed the profit calculation formula:
  `Total Cost = Seed + Fertilizer + Labour + Irrigation + Pesticides + Other`
  `Revenue = Yield (kg) × Selling Price (₹/kg)`
  `Profit/Loss = Revenue − Total Cost`
  `Cost/kg = Total Cost ÷ Yield`
- The example calculator test (`1000 kg × ₹10/kg` revenue with `₹4500` total cost) gives `₹10000` revenue, `₹5500` profit, and `₹4.50/kg` cost.
- Removed no working feature from the supplied project.

### Browser/network limitation during this build
A full interactive Chromium regression run could not be completed reliably in this execution environment because the headless browser process did not terminate normally. Therefore, this package should **not** claim that real Firebase, external weather/market APIs, SMS/email/push, or production AI were end-to-end tested.

### Recommended final demo check
Run:

```bash
cd smart-krishi-saathi
python3 -m http.server 8080
```

Open `http://localhost:8080`, then test:
1. Explore Demo / profile saving.
2. Every navigation tab.
3. Crop Doctor image upload and simulated diagnosis.
4. Weather and Market sample labels.
5. Calendar add/complete task.
6. Profit Calculator and Save Record.
7. Soil record + optional image/PDF selection.
8. Notifications and browser-reminder permission.
9. English → Hindi → Marathi.
10. Settings → Reset Demo Data.
11. Enable browser DevTools → Application → Service Workers and confirm the service worker is active.
12. DevTools → Network → Offline, reload, and verify the app shell and saved local data remain available.

### Still future development
- Real weather API credentials.
- Real current market-price API credentials.
- Real AI Crop Doctor backend/model.
- Real push/SMS/email provider and backend.
- Full Firebase production testing with two accounts and deployed security rules.
- Complete localization of every hard-coded sentence in the less frequently visited screens.
- Automated browser regression/CI tests.
