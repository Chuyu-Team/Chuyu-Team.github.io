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
    "revision": "2e644a01cc49f652bd427e541e1077e4"
  },
  {
    "url": "assets/css/0.styles.d7499c4e.css",
    "revision": "18dfb4ad268a19504fcf568766bf6272"
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
    "url": "assets/js/10.bffbe603.js",
    "revision": "b4127fe057566d4162fa5a41c975fb64"
  },
  {
    "url": "assets/js/11.a4c6a436.js",
    "revision": "71367807e6d23620871101fac97196d9"
  },
  {
    "url": "assets/js/12.1b04f86b.js",
    "revision": "0479d4a05f21f34e142daeb690be7d4e"
  },
  {
    "url": "assets/js/2.2236e362.js",
    "revision": "a4290326e014f76962c492c07c781caf"
  },
  {
    "url": "assets/js/3.dfea0234.js",
    "revision": "6d4f66c865ba340200a556ac550c6daa"
  },
  {
    "url": "assets/js/4.6ff8a8b0.js",
    "revision": "e4c6d900fa5707ddedccee1e28211012"
  },
  {
    "url": "assets/js/5.c3cf5528.js",
    "revision": "6dfd17ecf73622bee57652a53c92b345"
  },
  {
    "url": "assets/js/6.dfe08e04.js",
    "revision": "1960757033f17be629de6d18fb813d8c"
  },
  {
    "url": "assets/js/7.e88a7dd1.js",
    "revision": "2e6958868993fd73e7e780dc906e053b"
  },
  {
    "url": "assets/js/8.62cc5e7b.js",
    "revision": "94c54d282e06bc3cbe730092b698d94d"
  },
  {
    "url": "assets/js/9.da3da0a6.js",
    "revision": "050d05581860617ef54c6944c3b84df6"
  },
  {
    "url": "assets/js/app.3b439340.js",
    "revision": "bbb3fa7a09fb08f904ca8955c6b3e4af"
  },
  {
    "url": "en-US/docs/index.html",
    "revision": "855eb661178e66cdaceb322b5dbef1aa"
  },
  {
    "url": "en-US/index.html",
    "revision": "cd8ac7a5972e463c6c759d43bdd07e2d"
  },
  {
    "url": "index.html",
    "revision": "b87c9140f47a61e067e72b413bdac27d"
  },
  {
    "url": "zh-Hans/docs/index.html",
    "revision": "1ad525cc1bd0d04fd8be5f672fd0cca5"
  },
  {
    "url": "zh-Hans/index.html",
    "revision": "226a6ad50a994ed8ee487617d123f68f"
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
