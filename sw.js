/* KSD//Signal service worker (PWA/web only — the native app unregisters this).
   Network-first for HTML/navigation so a new version is never trapped behind a
   stale cache; cache-first for static assets (icons) for speed & offline. */
const CACHE = 'ksd-signal-v30';
const ASSETS = ['.', 'index.html', 'rook.lore.js', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

function isHTMLRequest(req){
  const path = new URL(req.url).pathname;
  return req.mode === 'navigate' ||
         (req.headers.get('accept') || '').includes('text/html') ||
         path === '/' || path.endsWith('/index.html') || path.endsWith('rook.lore.js');
}

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const sameOrigin = new URL(e.request.url).origin === location.origin;

  // Network-first for HTML + the lore pack: always try the network, fall back to cache offline.
  if (sameOrigin && isHTMLRequest(e.request)) {
    e.respondWith(
      fetch(e.request).then(res => {
        if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); }
        return res;
      }).catch(() => caches.match(e.request, { ignoreSearch: true }).then(hit => hit || caches.match('index.html')))
    );
    return;
  }

  // Cache-first for everything else (icons, fonts, etc.).
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then(hit =>
      hit ||
      fetch(e.request).then(res => {
        if (res.ok && sameOrigin) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); }
        return res;
      })
    )
  );
});
