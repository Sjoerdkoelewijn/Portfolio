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
    "url": "webpack-runtime-ae1d3610507acee763cc.js"
  },
  {
    "url": "styles.caa35c4b5b51e640181f.css"
  },
  {
    "url": "styles-e8416e4f96df13dcb2de.js"
  },
  {
    "url": "commons-c77b3ec9789950d10e39.js"
  },
  {
    "url": "app-3760ed4b2ca4e34a277d.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "0c3f6054a4caabd262340b9ec9f84401"
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
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-b042de31443a9c771a3a.js"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "43232b01cc861c0701a3ece4bd67720b"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "b3d45d548c6fdeebf89e65780a3a2db5"
  },
  {
    "url": "component---src-pages-about-js-e0b52f75024111b8356f.js"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "6475da6179f905bf1a3557b482a162a7"
  },
  {
    "url": "component---src-pages-contact-js-ae7035ec8d1e3a79d00b.js"
  },
  {
    "url": "page-data/contact/page-data.json",
    "revision": "bcc5ffa5f6c80f9c1d886d04db954adf"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "726a3772a9d7a186249acefab5d57cfe"
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
  if (!resources || !(await caches.match(`/app-3760ed4b2ca4e34a277d.js`))) {
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
