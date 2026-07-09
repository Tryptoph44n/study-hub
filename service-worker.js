// Bump CACHE_NAME whenever PRECACHE_URLS or app assets change meaningfully.
const CACHE_NAME = 'study-hub-v4';

// Relative to the service worker's scope (the deployment root), so this works
// both at a domain root and at a GitHub Pages project sub-path.
const PRECACHE_URLS = [
  'index.html',
  'manifest.json',
  'shared/css/style.css',
  'shared/js/usage.js',
  'shared/js/pwa.js',
  'assets/icon.png',
  'assets/icon.svg',
  'apps/japanese/index.html',
  'apps/japanese/app.js',
  'apps/japanese/content.js',
  'apps/polymer/index.html',
  'apps/polymer/app.js',
  'apps/polymer/content.js',
  'apps/polymer/enrichment.js',
  'apps/polymer/theme.css',
  'apps/history/index.html',
  'apps/history/app.js',
  'apps/history/content.js',
  'apps/history/geo.js',
  'apps/history/theme.css',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Stale-while-revalidate: serve from cache immediately when available, refresh
// the cache in the background, and fall back to cache if the network fails
// (offline). Only same-origin GET requests are handled.
self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET' || !req.url.startsWith(self.location.origin)) return;

  event.respondWith(
    caches.match(req).then(cached => {
      const network = fetch(req).then(res => {
        if (res && res.status === 200) {
          const clone = res.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(req, clone));
        }
        return res;
      }).catch(() => cached);
      return cached || network;
    })
  );
});
