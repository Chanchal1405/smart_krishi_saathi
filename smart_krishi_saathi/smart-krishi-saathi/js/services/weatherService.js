/* =========================================================================
   Weather Service — live data when configured, clearly-labelled sample
   data otherwise. Never presents sample data as a live forecast.
   ========================================================================= */
window.KSWeather = (function () {
  const cfg = () => (window.KS_CONFIG && window.KS_CONFIG.weather) || {};

  const SAMPLE = {
    source: "sample",
    updatedAt: null,
    current: { temp: 31, condition: "Partly cloudy", humidity: 58, windKph: 12 },
    days: [
      { label: "Today", temp: 31, rainChancePct: 10 },
      { label: "Tomorrow", temp: 29, rainChancePct: 60 },
      { label: "Day 3", temp: 30, rainChancePct: 20 },
      { label: "Day 4", temp: 28, rainChancePct: 5 },
      { label: "Day 5", temp: 32, rainChancePct: 0 },
    ],
    alerts: [
      { level: "warning", text: "Heavy rain expected tomorrow — delay spraying and check field drainage. (Example alert, not a live warning.)" },
    ],
  };

  function craftAlerts(days) {
    const alerts = [];
    days.forEach((d) => {
      if (d.rainChancePct >= 60) alerts.push({ level: "warning", text: `Heavy rain risk on ${d.label} (${d.rainChancePct}% chance) — delay spraying, check field drainage.` });
      if (d.temp >= 40) alerts.push({ level: "danger", text: `Extreme heat expected on ${d.label} (${d.temp}°C) — irrigate in early morning/evening, protect young plants.` });
    });
    return alerts;
  }

  /** district: free-text district/village name entered/selected by the farmer. */
  async function getForecast(district) {
    const c = cfg();
    if (!window.KS_isConfigured(c.apiKey)) {
      return { ...SAMPLE, updatedAt: new Date().toISOString(), district };
    }
    try {
      // OpenWeatherMap 5-day/3-hour forecast, aggregated to one entry/day.
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${encodeURIComponent(district + ",IN")}&appid=${c.apiKey}&units=metric`;
      const res = await fetch(url);
      if (!res.ok) throw new Error("Weather API error: " + res.status);
      const json = await res.json();
      const byDay = {};
      json.list.forEach((entry) => {
        const day = entry.dt_txt.split(" ")[0];
        byDay[day] = byDay[day] || [];
        byDay[day].push(entry);
      });
      const days = Object.keys(byDay).slice(0, 5).map((day, i) => {
        const entries = byDay[day];
        const temp = Math.round(entries.reduce((s, e) => s + e.main.temp, 0) / entries.length);
        const rainChancePct = Math.round(Math.max(...entries.map((e) => (e.pop || 0) * 100)));
        return { label: i === 0 ? "Today" : new Date(day).toLocaleDateString(undefined, { weekday: "short" }), temp, rainChancePct };
      });
      const current = { temp: Math.round(json.list[0].main.temp), condition: json.list[0].weather[0].description, humidity: json.list[0].main.humidity, windKph: Math.round(json.list[0].wind.speed * 3.6) };
      return { source: "live", provider: "OpenWeatherMap", updatedAt: new Date().toISOString(), district, current, days, alerts: craftAlerts(days) };
    } catch (e) {
      console.warn("Live weather failed, falling back to sample data:", e);
      return { ...SAMPLE, updatedAt: new Date().toISOString(), district, error: e.message, source: "sample" };
    }
  }

  return { getForecast, isLive: () => window.KS_isConfigured(cfg().apiKey) };
})();
