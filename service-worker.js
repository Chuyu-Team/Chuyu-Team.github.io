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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "f26dbb482db32c249358303cf5159b2b"
  },
  {
    "url": "assets/css/0.styles.89589bdc.css",
    "revision": "d13f80e829246e8b96e6fd1eca76ae35"
  },
  {
    "url": "assets/icons/android-chrome-192x192.png",
    "revision": "9dcaa8f0f8fe8b0142f2efbe64747eaa"
  },
  {
    "url": "assets/icons/android-chrome-512x512.png",
    "revision": "a2b0eea0480136992202eb6e920ab639"
  },
  {
    "url": "assets/icons/apple-touch-icon.png",
    "revision": "e6639be41ff35c0bfee9d7ea60f621a4"
  },
  {
    "url": "assets/icons/mstile.png",
    "revision": "f63aec5945f8f82eadeb6c1bf2779ed3"
  },
  {
    "url": "assets/icons/safari-pinned-tab.svg",
    "revision": "365616d6a706f1e56b45f43d2905a575"
  },
  {
    "url": "assets/image/logo.png",
    "revision": "361ea0c3f34a7648474e3b46ceb740cb"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.93b1ce3a.js",
    "revision": "e31f22b41a294a117cf3d8becba8df8a"
  },
  {
    "url": "assets/js/11.7672aeff.js",
    "revision": "799f69923c9ff4af0bb97798edcd0e7c"
  },
  {
    "url": "assets/js/12.79409a78.js",
    "revision": "1da80492878a7cf8453cbf5b51e079c4"
  },
  {
    "url": "assets/js/2.1577ffcd.js",
    "revision": "6d8adc27ac5fbe4024340cc1d39bf063"
  },
  {
    "url": "assets/js/3.76f26f90.js",
    "revision": "e5eadf78c84eddea7d2238895f36bc89"
  },
  {
    "url": "assets/js/4.07081b61.js",
    "revision": "0c20d82bbc7883276e5c5b04f6355676"
  },
  {
    "url": "assets/js/5.a508c2f5.js",
    "revision": "9fedfcc3e257d0305e0dd21c0b6ef885"
  },
  {
    "url": "assets/js/6.033225c8.js",
    "revision": "d2aec301ab13805bf112b6e18f0a5a2b"
  },
  {
    "url": "assets/js/7.da1c9733.js",
    "revision": "72ce87507ece1aea3b0545287ce5a2d5"
  },
  {
    "url": "assets/js/8.c63fd892.js",
    "revision": "ee23efec7670446256f9e8529d116252"
  },
  {
    "url": "assets/js/9.4414beeb.js",
    "revision": "f8b9644f5bd17740be456c46328702e4"
  },
  {
    "url": "assets/js/app.e9095dfc.js",
    "revision": "04bac3b8b9ec78566d34ad4caa71ad5d"
  },
  {
    "url": "en-US/docs/index.html",
    "revision": "e84be6bf899421373e4f077f2caba1fb"
  },
  {
    "url": "en-US/index.html",
    "revision": "4111bdf7be45804eb75770c0a42508da"
  },
  {
    "url": "index.html",
    "revision": "b87c9140f47a61e067e72b413bdac27d"
  },
  {
    "url": "zh-Hans/docs/index.html",
    "revision": "522a7970e487576d99f501366cc8270f"
  },
  {
    "url": "zh-Hans/index.html",
    "revision": "f0483a181b21988061d823da419b21e1"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
