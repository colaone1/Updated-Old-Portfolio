const CACHE_NAME = 'portfolio-cache-v1';
const CACHE_VERSION = 1;
const CURRENT_CACHE = `${CACHE_NAME}-v${CACHE_VERSION}`;

const urlsToCache = [
    '/',
    '/index.html',
    '/about-page.html',
    '/projects.html',
    '/contact-us.html',
    '/text-game.html',
    '/star-wars-quiz.html',
    '/game-review.html',
    '/cipher.html',
    '/styles.css',
    '/scripts.js',
    '/images/background.jpg',
    '/images/background-small.jpg',
    '/images/background-medium.jpg',
    '/images/Net-design.png',
    '/images/castle-icon.png',
    '/images/castle-icon-small.png'
];

// Install event - cache all static assets
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CURRENT_CACHE)
            .then(cache => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache)
                    .catch(error => {
                        console.error('Failed to cache resources:', error);
                        // Skip waiting even if caching fails
                        return self.skipWaiting();
                    });
            })
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CURRENT_CACHE) {
                        console.log('Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => {
            // Take control of all clients
            return clients.claim();
        })
    );
});

// Helper function to fetch and cache response
async function fetchAndCache(request) {
    try {
        const response = await fetch(request);
        
        // Check if we received a valid response
        if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
        }

        // Clone the response as it can only be consumed once
        const responseToCache = response.clone();

        // Cache the response
        const cache = await caches.open(CURRENT_CACHE);
        await cache.put(request, responseToCache);

        return response;
    } catch (error) {
        console.error('Fetch failed:', error);
        throw error;
    }
}

// Fetch event - serve from cache, falling back to network
self.addEventListener('fetch', event => {
    // Handle only GET requests
    if (event.request.method !== 'GET') return;

    // Skip cross-origin requests
    if (!event.request.url.startsWith(self.location.origin)) return;

    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // Cache hit - return the response from the cached version
                if (response) {
                    // Fetch new version in the background
                    event.waitUntil(
                        fetchAndCache(event.request)
                            .catch(error => console.error('Background fetch failed:', error))
                    );
                    return response;
                }

                // Not in cache - fetch and cache
                return fetchAndCache(event.request)
                    .catch(error => {
                        console.error('Fetch failed:', error);
                        // Return offline page if available
                        return caches.match('/offline.html');
                    });
            })
    );
});

// Background sync event
self.addEventListener('sync', event => {
    if (event.tag === 'sync-data') {
        event.waitUntil(
            // Implement background sync logic here
            Promise.resolve()
        );
    }
});

// Push notification event
self.addEventListener('push', event => {
    const options = {
        body: event.data.text(),
        icon: '/images/icon.png',
        badge: '/images/badge.png'
    };

    event.waitUntil(
        self.registration.showNotification('Portfolio Update', options)
    );
});

// Notification click event
self.addEventListener('notificationclick', event => {
    event.notification.close();
    event.waitUntil(
        clients.openWindow('/')
    );
}); 