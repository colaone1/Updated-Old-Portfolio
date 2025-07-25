const CURRENT_CACHE = 'portfolio-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/styles.css',
    '/scripts.js',
    '/images/Personal%20Pictures/About%20Page%20Picture.jpg'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CURRENT_CACHE)
            .then(cache => {
                // Add files one by one to handle missing files gracefully
                return Promise.allSettled(
                    urlsToCache.map(url => cache.add(url).catch(err => {
                        console.log('Failed to cache:', url, err);
                        return null;
                    }))
                );
            })
            .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CURRENT_CACHE) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

self.addEventListener('fetch', event => {
    // Skip non-GET requests and non-same-origin requests
    if (event.request.method !== 'GET' || !event.request.url.startsWith(self.location.origin)) {
        return;
    }

    // Skip requests that are already being handled by the browser
    if (event.request.mode === 'navigate') {
        return;
    }

    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }
                return fetch(event.request)
                    .then(response => {
                        // Only cache successful responses
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }
                        const responseToCache = response.clone();
                        caches.open(CURRENT_CACHE)
                            .then(cache => cache.put(event.request, responseToCache));
                        return response;
                    })
                    .catch(() => {
                        // Return a fallback response for failed requests
                        return new Response('Not found', { status: 404 });
                    });
            })
    );
}); 