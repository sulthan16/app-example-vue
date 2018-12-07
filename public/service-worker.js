if (workbox) {
    workbox.setConfig({
        debug: false
    })

    workbox.clientsClaim()

    workbox.precaching.precacheAndRoute(self.__precacheManifest || [])

    workbox.routing.registerRoute(
        /(.*)\/self/,
        workbox.strategies.networkFirst({
            cacheName: 'record-api'
        })
    )

    self.addEventListener('message', function (ev) {
        if (ev.data.action === 'skipWaiting') { self.skipWaiting(); }
    });

    self.addEventListener('push', function (ev) {
        if (ev.data) {
            var data = ev.data.json();
            var title = data.title;
            const promiseChain = self.registration.showNotification(title, data);
            ev.waitUntil(promiseChain);
        }
    });
}
