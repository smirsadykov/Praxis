// Praxis service worker.
// Strategy by asset type:
//   - HTML (navigation requests): network-first, fall back to cache.
//     Means a fresh page is always tried; works offline if no network.
//   - Same-origin static assets (.js, .css, .json, .png, .svg):
//     stale-while-revalidate — serve cached instantly (fast), refresh
//     in the background. Next visit sees the update. No more manual
//     cache busting.
//   - CDN assets (KaTeX): cache-first — they're versioned URLs and
//     never change for a given version.

const CACHE = "praxis-v27";

const PRECACHE_ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./math.js",
  "./physics.js",
  "./control.js",
  "./intros.js",
  "./explanations.js",
  "./formulas.js",
  "./task-explanations.js",
  "./diagrams.js",
  "./misconceptions.js",
  "./glossary.js",
  "./connections.js",
  "./step-whys.js",
  "./control-extras.js",
  "./book-references.js",
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css",
  "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js",
  "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) =>
      Promise.all(
        PRECACHE_ASSETS.map((url) =>
          cache.add(url).catch(() => {
            // Don't fail install if a CDN asset can't be cached at install time;
            // it will be cached on first successful fetch.
          })
        )
      )
    )
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    Promise.all([
      caches
        .keys()
        .then((keys) =>
          Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
        ),
      self.clients.claim()
    ])
  );
});

// Listen for skipWaiting message from the page (used by the update toast).
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

function isNavigation(req) {
  return (
    req.mode === "navigate" ||
    (req.method === "GET" && req.headers.get("accept")?.includes("text/html"))
  );
}

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  // Strategy: network-first for HTML navigations.
  if (isNavigation(req)) {
    event.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((cache) => cache.put(req, copy)).catch(() => {});
          return res;
        })
        .catch(() => caches.match(req).then((c) => c || caches.match("./index.html")))
    );
    return;
  }

  // Strategy: stale-while-revalidate for same-origin static assets.
  if (url.origin === self.location.origin) {
    event.respondWith(
      caches.match(req).then((cached) => {
        const networkFetch = fetch(req)
          .then((res) => {
            if (res && res.status === 200) {
              const copy = res.clone();
              caches.open(CACHE).then((cache) => cache.put(req, copy)).catch(() => {});
            }
            return res;
          })
          .catch(() => cached);
        return cached || networkFetch;
      })
    );
    return;
  }

  // Strategy: cache-first for CDN assets (versioned URLs).
  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req)
        .then((res) => {
          if (res && res.status === 200) {
            const copy = res.clone();
            caches.open(CACHE).then((cache) => cache.put(req, copy)).catch(() => {});
          }
          return res;
        })
        .catch(() => cached);
    })
  );
});
