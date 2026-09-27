// Smart Krishi Saathi — basic offline app-shell caching.
// This caches the static pages/assets so the app UI opens offline.
// It does NOT cache or fake live weather, market prices, or messages —
// those remain clearly unavailable offline, as required by the project brief.

const CACHE_NAME = "krishi-saathi-v2";
const ASSETS = [
  "./",
  "index.html",
  "css/styles.css",
  "js/config.js",
  "js/app.js",
  "js/firebase/firebaseService.js",
  "js/services/weatherService.js",
  "js/services/marketService.js",
  "js/services/aiCropDoctorService.js",
  "js/services/notificationService.js",
  "js/services/offlineQueue.js",
  "manifest.json",
  "icons/icon-192.png",
  "icons/icon-512.png"
];
// Note: the Firebase SDK <script> tags load from a CDN (cross-origin) and
// are intentionally NOT cached here — when offline, those requests will
// simply fail and the app continues in local/offline mode (see
// firebaseService.js, which never throws just because `firebase` failed
// to load — it only activates when window.KS_CONFIG.firebase.apiKey is set
// AND the SDK loaded successfully).

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  // Only handle GET requests for same-origin app-shell files (cache-first, network fallback).
  if (event.request.method !== "GET") return;
  event.respondWith(
    caches.match(event.request).then((cached) => {
      return cached || fetch(event.request).catch(() => cached);
    })
  );
});
