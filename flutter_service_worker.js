'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "ce4b9f2b2a76654469ea60a57ce63c1a",
"assets/assets/fonts/caviardreams/CaviarDreams.ttf": "3670aa493ee09e92c7b8e1e7c2f5b441",
"assets/assets/fonts/opensans/OpenSans-Bold.ttf": "50145685042b4df07a1fd19957275b81",
"assets/assets/fonts/opensans/OpenSans-BoldItalic.ttf": "78b08a68d05d5fabb0b8effd51bf6ade",
"assets/assets/fonts/opensans/OpenSans-ExtraBold.ttf": "8bac22ed4fd7c8a30536be18e2984f84",
"assets/assets/fonts/opensans/OpenSans-ExtraBoldItalic.ttf": "73d6bb0d4f596a91992e6be32e82e3bc",
"assets/assets/fonts/opensans/OpenSans-Italic.ttf": "c7dcce084c445260a266f92db56f5517",
"assets/assets/fonts/opensans/OpenSans-Light.ttf": "1bf71be111189e76987a4bb9b3115cb7",
"assets/assets/fonts/opensans/OpenSans-LightItalic.ttf": "6943fb6fd4200f3d073469325c6acdc9",
"assets/assets/fonts/opensans/OpenSans-Regular.ttf": "629a55a7e793da068dc580d184cc0e31",
"assets/assets/fonts/opensans/OpenSans-Semibold.ttf": "33f225b8f5f7d6b34a0926f58f96c1e9",
"assets/assets/fonts/opensans/OpenSans-SemiboldItalic.ttf": "73f7301a9cd7a086295401eefe0c998f",
"assets/assets/fonts/wlm/wlm%2520black.ttf": "6a838b58ac340e6ba7cf73a2e1edd2f2",
"assets/FontManifest.json": "403afd79d7220a99c87a6a9f1d16ef51",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/images/1.png": "417f99e80dadfc8ee53b3d141de28dac",
"assets/images/10.png": "bb559fe8b095b7b905c1f31ba094b123",
"assets/images/11.png": "fab0bc830fb5e415ea4517f0758e4c49",
"assets/images/12.png": "d85a5b148a62e2baefc5cbd69da4568c",
"assets/images/2.png": "c5ee1fd1d7db2890368dfbb04b238ec7",
"assets/images/3.png": "bd88f193832a67ddf860d00e6617cde7",
"assets/images/4.png": "3983fd67327e383f4d7fbafbb984b35f",
"assets/images/5.png": "12b940e6210e29b073f8a54009ca13e7",
"assets/images/6.png": "0f76cabf4e46dfbec00f1f97addcdacc",
"assets/images/7.png": "6ffa61a845a8cfc8f391e690db82c3eb",
"assets/images/8.png": "e9965d41904242c50ad757173e68ccc5",
"assets/images/9.png": "5f9e2acb8891ff33e12d86c0889062f7",
"assets/images/bg.png": "77783a06b123ca9b58616922019a6b9d",
"assets/images/empty_user.png": "e4a71a39b2752984f4c860d622dbf4e0",
"assets/images/facebookicon.png": "d16c261b5fa420fb9db0d6f37f5baf5a",
"assets/images/googleicon.png": "55d3560e93ba6e8e604f43b0a089c3c3",
"assets/images/IMG-20220919-WA0000.jpg": "4657c65fc0c5dd03e811e9a5945ac2d7",
"assets/images/IMG-20220919-WA0001.jpg": "327150abdd2b6fb2fea8db5f4e30190e",
"assets/images/IMG-20220919-WA0003.jpg": "ccb3dc242460f28d12d3c7ceac7d3d9c",
"assets/images/IMG-20220919-WA0004.jpg": "7a380f9c74353d680919f36408b4af43",
"assets/images/IMG-20220919-WA0005.jpg": "a7340b8becbe38f390a7c39aa98c7076",
"assets/images/IMG-20220919-WA0006.jpg": "8b668938eedc1c6748d141b11330dd8c",
"assets/images/IMG-20220919-WA0007.jpg": "bdbc49418f102180cb5701ac968ca4ad",
"assets/images/IMG-20220919-WA0008.jpg": "b5ec969c7eb466bfc3ec0683f9e3648f",
"assets/images/IMG-20220919-WA0009.jpg": "367933b7d720f4eb87a85bd87a814361",
"assets/images/IMG-20220919-WA0010.jpg": "e3bce7e7d8795d089c3a36b1cb2cacba",
"assets/images/initial_home_main.png": "91b41ce4021acff8fce0b3b835f5e5ad",
"assets/images/logo.png": "3cd881056d0193e2195610fa62d83fae",
"assets/images/logo_thin.png": "b43c0e55149aaaff18bc1e8a8a27f983",
"assets/images/recaptcha-logo.png": "fb69306a29de52139123a600f09a392b",
"assets/images/whastapp.png": "953a8c3e23cfd7540f2741454b1f61ea",
"assets/NOTICES": "377516db9722b7d7ab5bd82e191295c4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4e20cb87b0d43808c49449ffd69b1a74",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "1f7cb220b3f5309130bd6d9ad87e0fc0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "26f5af2d93473531f82ef5060f9c6d45",
"assets/shaders/ink_sparkle.frag": "a04e492a05f9fd1a8cc6f12163b184dd",
"canvaskit/canvaskit.js": "687636ce014616f8b829c44074231939",
"canvaskit/canvaskit.wasm": "d4972dbefe733345d4eabb87d17fcb5f",
"canvaskit/profiling/canvaskit.js": "ba8aac0ba37d0bfa3c9a5f77c761b88b",
"canvaskit/profiling/canvaskit.wasm": "05ad694fda6cfca3f9bbac4b18358f93",
"favicon.ico": "d3c0ffd88bdb45d3f38a4101b5be7568",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "195f32f4217e034162a6697208586f44",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "eb9be5b18a81478dd96d46dec33185f6",
"/": "eb9be5b18a81478dd96d46dec33185f6",
"main.dart.js": "46d57e45272515a1b42d20d431df9149",
"manifest.json": "1f8d178f8f1cf51c2abc53d6a8fa0fd6",
"version.json": "41c0fd3997f868acf4b823f191a0a59e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
