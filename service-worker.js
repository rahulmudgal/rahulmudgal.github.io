const FILES_TO_CACHE = [
    '/index.html',
];

evt.waitUntil(
    caches.keys().then((keyList) => {
        return Promise.all(keyList.map((key) => {
            if (key !== CACHE_NAME) {
                console.log('[ServiceWorker] Removing old cache', key);
                return caches.delete(key);
            }
        }));
    })
);