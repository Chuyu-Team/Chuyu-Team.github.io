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
    "revision": "baca952ac9a4a239ff750295be782494"
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
    "url": "assets/js/10.0d8b6942.js",
    "revision": "23cdf9eb71775be50e5de7d942f097eb"
  },
  {
    "url": "assets/js/11.1e1a55c8.js",
    "revision": "ae46039e8a34ab6abd0bf0748775628e"
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
    "url": "assets/js/8.db8ddf15.js",
    "revision": "678b36b385d13af1bcb64f61e1ff5ffe"
  },
  {
    "url": "assets/js/9.c4632efa.js",
    "revision": "6e3e60c18df5de5cd798494d70ea61f8"
  },
  {
    "url": "assets/js/app.c6a99cd8.js",
    "revision": "72f96930ecdd3beef3e3c5a37374ec4e"
  },
  {
    "url": "en-US/docs/index.html",
    "revision": "b88f5ddf91eddc5a004423e3336e9c4b"
  },
  {
    "url": "en-US/index.html",
    "revision": "34518df4f30c6439f257b743275be9c4"
  },
  {
    "url": "index.html",
    "revision": "b87c9140f47a61e067e72b413bdac27d"
  },
  {
    "url": "zh-Hans/docs/index.html",
    "revision": "dcb709775acb64afc6404d24d3a0b750"
  },
  {
    "url": "zh-Hans/index.html",
    "revision": "2ab64c19db0a14861ae9b0149c82ccba"
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
