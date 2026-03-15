const CACHE_NAME = 'zen-timer-cache-v1';

// Files that need to be saved to the phone for offline use
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './gong.mp3',
  './icon.png'
];

// Step 1: Install and save the files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Step 2: Intercept network requests and serve from the phone's cache
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return the cached file if we have it, otherwise fetch from the internet
        return response || fetch(event.request);
      })
  );
});