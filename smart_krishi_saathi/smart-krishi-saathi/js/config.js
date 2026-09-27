/* =========================================================================
   Smart Krishi Saathi — CONFIGURATION
   -------------------------------------------------------------------------
   Fill in real values below to move any feature from "Demo mode" to
   "Live mode". Every feature keeps working in demo mode if you leave its
   keys blank — nothing breaks, the UI just keeps showing a "Demo/Sample"
   badge and clearly-labelled sample data instead of live data.

   SECURITY NOTE:
   - The Firebase config below is NOT a secret — Firebase web config is
     designed to be public; real protection comes from Firestore/Storage
     Security Rules (see firestore.rules / storage.rules) and Firebase
     Authentication, not from hiding this object.
   - The WEATHER_API_KEY and MARKET_API_KEY below are for APIs that are
     safe to call directly from the browser (read-only, rate-limited,
     public data). Do NOT put a secret key that grants write access or
     costs money-per-call directly here.
   - The AI Crop Doctor key is treated differently — see aiCropDoctorService.js.
     Most image-classification providers require a secret key that must
     NEVER ship in frontend JS. Leave AI_CROP_DOCTOR.endpoint pointing at
     your own small serverless function (Cloud Function / Firebase
     Function) that holds the real provider secret server-side, not at
     the provider directly.
   ========================================================================= */

window.KS_CONFIG = {

  /* ---- 1. FIREBASE ----------------------------------------------------
     Get this object from: Firebase Console → Project settings →
     General → "Your apps" → Web app → SDK setup and configuration.
     Leave apiKey empty ("") to keep the whole app in local demo mode
     (localStorage only, no network, exactly like the original build). */
  firebase: {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  },

  /* ---- 2. WEATHER API ---------------------------------------------------
     Example provider: OpenWeatherMap (https://openweathermap.org/api),
     free tier available. Any provider that returns current + multi-day
     forecast by city/lat-lon can be adapted in js/services/weatherService.js. */
  weather: {
    provider: "openweathermap",   // informational only
    apiKey: "",                    // leave blank for demo/sample weather
    // Example endpoint pattern used by weatherService.js:
    // https://api.openweathermap.org/data/2.5/forecast?q={city}&appid={apiKey}&units=metric
  },

  /* ---- 3. MARKET PRICE API ---------------------------------------------
     Example provider: data.gov.in "Variety-wise Daily Market Prices" API
     (Government of India, Ministry of Agriculture — Agmarknet data),
     resource id: 9ef84268-d588-465a-a308-a864a43d0070.
     Register a free API key at https://data.gov.in/user/register then
     paste it below. Leave blank for demo/sample mandi prices. */
  market: {
    provider: "data.gov.in-agmarknet",
    apiKey: "",
    resourceId: "9ef84268-d588-465a-a308-a864a43d0070"
  },

  /* ---- 4. AI CROP DOCTOR -------------------------------------------------
     Point this at YOUR OWN backend/serverless endpoint (e.g. a Firebase
     Cloud Function) that internally calls an image-classification model
     (e.g. Plant.id, a custom TensorFlow/PyTorch model, or a Vertex AI /
     HuggingFace endpoint) and returns JSON. Never put a provider secret
     key here — this file ships to every visitor's browser. Leave the
     endpoint blank to keep Crop Doctor in clearly-labelled demo mode. */
  aiCropDoctor: {
    endpoint: "", // e.g. "https://us-central1-<project>.cloudfunctions.net/diagnoseCrop"
  },

  /* ---- 5. NOTIFICATIONS (push/SMS/email) ---------------------------------
     Real delivery needs a server component (Firebase Cloud Messaging for
     push, and an SMS/email provider such as MSG91/Twilio/SendGrid for
     SMS/email — all of which require a secret key kept server-side, e.g.
     in a Firebase Cloud Function). Leave blank to keep notifications
     in-app + locally-scheduled only (honest, no fake "sent" messages). */
  notifications: {
    fcmVapidKey: "", // Firebase Cloud Messaging Web Push "Key pair" (public), for browser push only
    smsProviderConfigured: false,
    emailProviderConfigured: false
  },

  /* ---- 6. VOICE ASSISTANT / LLM -----------------------------------------
     Point this at your own backend/serverless endpoint that calls a real
     LLM (e.g. via the Anthropic or another provider's API) so the secret
     API key never reaches the browser. Leave blank to keep the assistant
     on the existing offline keyword knowledge base. */
  assistantLLM: {
    endpoint: "" // e.g. "https://us-central1-<project>.cloudfunctions.net/askAssistant"
  }
};

/* Helper: true only when a non-empty string was configured. */
window.KS_isConfigured = (v) => typeof v === "string" && v.trim().length > 0;
