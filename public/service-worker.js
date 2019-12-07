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
    "url": "build/bundle.css",
    "revision": "d8efbc113208b76943191b18cebbe89b"
  },
  {
    "url": "build/bundle.js",
    "revision": "439349b295f96ae6eb97ce41c3889ff5"
  },
  {
    "url": "data.json",
    "revision": "c8a71e11275db23a885f856a0f2df68e"
  },
  {
    "url": "global.css",
    "revision": "4f9781a3a2386562edea49d022e8dcf2"
  },
  {
    "url": "images/bitllet-senzill.jpg",
    "revision": "1f378560131efe7ba1ada0ce706839ed"
  },
  {
    "url": "images/manifest/icon-128x128.png",
    "revision": "cebd8641a49c134038f20ca0f255066d"
  },
  {
    "url": "images/manifest/icon-144x144.png",
    "revision": "81829414c463089f3e6d9185eaf965e9"
  },
  {
    "url": "images/manifest/icon-152x152.png",
    "revision": "ec1609e55b1ce420a2028db3fb28bfdf"
  },
  {
    "url": "images/manifest/icon-192x192.png",
    "revision": "334ed975c060cc6e14047279ed646849"
  },
  {
    "url": "images/manifest/icon-384x384.png",
    "revision": "951b53c8d7a7f75db282da48ceaa1ded"
  },
  {
    "url": "images/manifest/icon-512x512.png",
    "revision": "951b53c8d7a7f75db282da48ceaa1ded"
  },
  {
    "url": "images/manifest/icon-72x72.png",
    "revision": "1c7077be256caa518e79162aa9144dcb"
  },
  {
    "url": "images/manifest/icon-96x96.png",
    "revision": "f452cace46aac1acc8e1c41befc022b8"
  },
  {
    "url": "images/tcasual.png",
    "revision": "c76a4cb27346207804a59b2fff85ad5d"
  },
  {
    "url": "images/tdia.jpg",
    "revision": "c1a793951bbaeff4d0d326fe296d1e96"
  },
  {
    "url": "images/tfmfn.jpg",
    "revision": "6c29cb281db20d35fdc92b10dda3d734"
  },
  {
    "url": "images/tgrup.png",
    "revision": "6a9ba10020ece20591b87f53a9af5718"
  },
  {
    "url": "images/tjove.jpg",
    "revision": "f8d49811350596bb51f7cc766a61fa0b"
  },
  {
    "url": "images/tusual.png",
    "revision": "9d7fbffe422dfdb10facafb59f0fb355"
  },
  {
    "url": "index.html",
    "revision": "84b9f021be2a18335f5bfc31914919e3"
  },
  {
    "url": "manifest.json",
    "revision": "9140551d9b76bd5861d2e15ae3075760"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
