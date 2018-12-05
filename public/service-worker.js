if (workbox) {
  workbox.setConfig({
    debug: true
  })

  workbox.clientsClaim()

  workbox.precaching.precacheAndRoute(self.__precacheManifest || [])

  workbox.routing.registerRoute(
    /(.*)\/self/,
    workbox.strategies.networkFirst()
  )
}
