/* =========================================================================
   AI Crop Doctor Service
   -------------------------------------------------------------------------
   Real image-classification providers require a secret key that must
   never sit in frontend JS. So this service:
     - If js/config.js -> aiCropDoctor.endpoint is set, POSTs the image to
       YOUR OWN backend/serverless function (which holds the real secret
       and calls the provider), and returns whatever that function replies.
     - Otherwise, returns a clearly-labelled SIMULATED result built from
       the existing demo disease knowledge base — and the UI must show a
       "Simulated / Demo result, not a real AI diagnosis" label whenever
       result.simulated is true. Never omit that label.
   ========================================================================= */
window.KSAiCropDoctor = (function () {
  const cfg = () => (window.KS_CONFIG && window.KS_CONFIG.aiCropDoctor) || {};

  const MAX_BYTES = 6 * 1024 * 1024; // 6 MB
  const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp"];

  function validateFile(file) {
    if (!file) throw new Error("Please choose or capture a photo first.");
    if (!ALLOWED_TYPES.includes(file.type)) throw new Error("Please upload a JPG, PNG or WEBP image.");
    if (file.size > MAX_BYTES) throw new Error("Image is too large (max 6 MB). Please choose a smaller photo.");
    return true;
  }

  /** cropId: id from CROPS list. diseaseDb: the existing DISEASES lookup
   * object from app.js, passed in so this service has no hard dependency
   * on app.js load order. */
  async function diagnose(cropId, file, diseaseDb) {
    validateFile(file);
    const c = cfg();

    if (window.KS_isConfigured(c.endpoint)) {
      try {
        const form = new FormData();
        form.append("crop", cropId);
        form.append("image", file);
        const res = await fetch(c.endpoint, { method: "POST", body: form });
        if (!res.ok) throw new Error("AI service error: " + res.status);
        const json = await res.json();
        // Expected shape from your backend function:
        // { disease, confidencePct, symptoms, causes, prevention, treatment }
        return { ...json, simulated: false, source: "live" };
      } catch (e) {
        console.warn("Live AI diagnosis failed, falling back to simulated demo result:", e);
        return simulate(cropId, diseaseDb, e.message);
      }
    }
    return simulate(cropId, diseaseDb);
  }

  function simulate(cropId, diseaseDb, errorMsg) {
    const d = (diseaseDb && diseaseDb[cropId]) || {
      name: "Unknown (demo)", symptoms: "—", causes: "—", prevention: "—", treatment: "—",
    };
    // A believable-looking but explicitly random/simulated confidence, so it
    // is never mistaken for a real model's output.
    const confidencePct = Math.round(55 + Math.random() * 30);
    return {
      simulated: true,
      source: "demo",
      error: errorMsg,
      disease: d.name,
      confidencePct,
      uncertain: confidencePct < 70,
      symptoms: d.symptoms, causes: d.causes, prevention: d.prevention, treatment: d.treatment,
    };
  }

  return { diagnose, validateFile, isLive: () => window.KS_isConfigured(cfg().endpoint) };
})();
