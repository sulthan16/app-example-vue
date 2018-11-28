if (workbox) {
  workbox.setConfig({
    debug: false
  })

  workbox.clientsClaim()

  workbox.precaching.precacheAndRoute(self.__precacheManifest || [])

  workbox.routing.registerRoute(
    /(.*)\/managementInstansi/,
    workbox.strategies.networkFirst()
  )
}
