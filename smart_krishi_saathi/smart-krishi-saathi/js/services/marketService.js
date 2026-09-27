/* =========================================================================
   Market Price Service — live mandi prices via data.gov.in (Agmarknet)
   when configured, otherwise clearly-labelled sample prices.
   ========================================================================= */
window.KSMarket = (function () {
  const cfg = () => (window.KS_CONFIG && window.KS_CONFIG.market) || {};

  const SAMPLE = [
    { crop: "Cotton", market: "Amravati", dist: "Amravati", unit: "per quintal", min: 6900, max: 7350, modal: 7200, date: "2026-09-24" },
    { crop: "Cotton", market: "Yavatmal", dist: "Yavatmal", unit: "per quintal", min: 6700, max: 7100, modal: 6950, date: "2026-09-24" },
    { crop: "Soybean", market: "Latur", dist: "Latur", unit: "per quintal", min: 4100, max: 4450, modal: 4300, date: "2026-09-25" },
    { crop: "Soybean", market: "Akola", dist: "Akola", unit: "per quintal", min: 3950, max: 4300, modal: 4150, date: "2026-09-25" },
    { crop: "Wheat", market: "Nashik", dist: "Nashik", unit: "per quintal", min: 2300, max: 2600, modal: 2450, date: "2026-09-23" },
    { crop: "Onion", market: "Lasalgaon", dist: "Nashik", unit: "per quintal", min: 1500, max: 2100, modal: 1800, date: "2026-09-26" },
    { crop: "Onion", market: "Pune", dist: "Pune", unit: "per quintal", min: 1650, max: 2250, modal: 1950, date: "2026-09-26" },
    { crop: "Tomato", market: "Pune", dist: "Pune", unit: "per quintal", min: 900, max: 1500, modal: 1200, date: "2026-09-26" },
    { crop: "Tomato", market: "Nagpur", dist: "Nagpur", unit: "per quintal", min: 800, max: 1300, modal: 1050, date: "2026-09-26" },
    { crop: "Orange", market: "Nagpur", dist: "Nagpur", unit: "per quintal", min: 3200, max: 4000, modal: 3600, date: "2026-09-22" },
  ];

  /** Returns {source:"live"|"sample", updatedAt, rows:[...]}. */
  async function getPrices({ crop = "", state = "Maharashtra" } = {}) {
    const c = cfg();
    if (!window.KS_isConfigured(c.apiKey)) {
      return { source: "sample", updatedAt: new Date().toISOString(), rows: SAMPLE };
    }
    try {
      const url = `https://api.data.gov.in/resource/${c.resourceId}?api-key=${c.apiKey}&format=json&limit=100` +
        (state ? `&filters[state]=${encodeURIComponent(state)}` : "") +
        (crop ? `&filters[commodity]=${encodeURIComponent(crop)}` : "");
      const res = await fetch(url);
      if (!res.ok) throw new Error("Market API error: " + res.status);
      const json = await res.json();
      const rows = (json.records || []).map((r) => ({
        crop: r.commodity, market: r.market, dist: r.district, unit: "per quintal",
        min: Number(r.min_price) || null, max: Number(r.max_price) || null, modal: Number(r.modal_price) || null,
        date: r.arrival_date,
      }));
      if (!rows.length) throw new Error("No live records returned for this filter.");
      return { source: "live", provider: "data.gov.in (Agmarknet)", updatedAt: new Date().toISOString(), rows };
    } catch (e) {
      console.warn("Live market prices failed, falling back to sample data:", e);
      return { source: "sample", updatedAt: new Date().toISOString(), rows: SAMPLE, error: e.message };
    }
  }

  return { getPrices, isLive: () => window.KS_isConfigured(cfg().apiKey) };
})();
