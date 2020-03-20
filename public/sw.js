/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-3edfd605687b175a9a06.js"
  },
  {
    "url": "styles.6d7b4e26c762420d4226.css"
  },
  {
    "url": "styles-abac3b152110f74a1f02.js"
  },
  {
    "url": "commons-6d865ae72e223edad1d7.js"
  },
  {
    "url": "app-8e5881a7730c77f82969.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-cf2fd0f92da7499f18b1.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "1e574a3ba951424e7c5367410eed1708"
  },
  {
    "url": "google-fonts/s/heebo/v5/NGS3v5_NC0k9P9kFbqRMkK4.woff2",
    "revision": "ed17386f7c073031a8e746e1babd8600"
  },
  {
    "url": "google-fonts/s/heebo/v5/NGS3v5_NC0k9P9l1aqRMkK4.woff2",
    "revision": "727b7d25149ae06c473531af7f4a0901"
  },
  {
    "url": "google-fonts/s/heebo/v5/NGS3v5_NC0k9P9ldb6RMkK4.woff2",
    "revision": "a33f4c25f92579478643faae618c4103"
  },
  {
    "url": "google-fonts/s/heebo/v5/NGS3v5_NC0k9P9lRa6RMkK4.woff2",
    "revision": "926869267d954c3d720fe517dad67280"
  },
  {
    "url": "google-fonts/s/heebo/v5/NGS6v5_NC0k9P9H2TbE.woff2",
    "revision": "cac824868e3045bb972e505812806fe5"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "c355c8040c47a63bfb3360e4b7cb6553"
  },
  {
    "url": "component---src-pages-about-js-6164aa06424af6cf5800.js"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "66c3333c00b06e1f14a29b7c0bb20814"
  },
  {
    "url": "component---src-pages-contact-js-88a1c002e295ad9f8bcd.js"
  },
  {
    "url": "page-data/contact/page-data.json",
    "revision": "bcc5ffa5f6c80f9c1d886d04db954adf"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "b31241af744ea0542fe05493815cb5ab"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\page-data\/.*\/page-data\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */

importScripts(`idb-keyval-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-8e5881a7730c77f82969.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
