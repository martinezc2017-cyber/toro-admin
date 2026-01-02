'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "185aee921109f4920e1fa88876c1ad2c",
"assets/AssetManifest.bin.json": "b480aca8ebaf58a9d1160b154b69459a",
"assets/assets/images/toro_logo.png": "a4c987aa6a9206bba51eab9ab63ff372",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "7ccc790ce022f1a6b665ee2e7fcb784e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "825613b7d7774d0313fc3a84c4cd8bee",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "27579f75cf69ea03832632d48a2fef7c",
"/": "27579f75cf69ea03832632d48a2fef7c",
"main.dart.js": "f7cb563c665e2a11eac0d0e7e5f08f5c",
"manifest.json": "a51884fcdc265b01907ac6ba51eb7fcb",
"toro-admin-repo/.git/COMMIT_EDITMSG": "afee4da5118979eb15f799f4c8bea4cf",
"toro-admin-repo/.git/config": "6b8e9bfa85bfdcfd7a3f15557932947e",
"toro-admin-repo/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"toro-admin-repo/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"toro-admin-repo/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"toro-admin-repo/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"toro-admin-repo/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"toro-admin-repo/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"toro-admin-repo/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"toro-admin-repo/.git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
"toro-admin-repo/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"toro-admin-repo/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"toro-admin-repo/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"toro-admin-repo/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"toro-admin-repo/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"toro-admin-repo/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"toro-admin-repo/.git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
"toro-admin-repo/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"toro-admin-repo/.git/index": "f2b7d49ac3be04eacbe6dfb2aa498e7b",
"toro-admin-repo/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"toro-admin-repo/.git/logs/HEAD": "8b0491a9d09bfa9d7f12fca5987c32d9",
"toro-admin-repo/.git/logs/refs/heads/main": "8b0491a9d09bfa9d7f12fca5987c32d9",
"toro-admin-repo/.git/logs/refs/remotes/origin/HEAD": "3907f6fdd266ea5bb57a394ec8ba666b",
"toro-admin-repo/.git/logs/refs/remotes/origin/main": "94091eee859f66e2955dc407326ec8b0",
"toro-admin-repo/.git/objects/30/4ab611d7b1f7d962c798c308ac19f7f4c404f5": "b59c3d5d93b155010dc9c603da87a522",
"toro-admin-repo/.git/objects/48/76ceba558f4a28c2b0c3fa762e0d9051766beb": "1019929af773e72bbdfd7bbacdbe10a4",
"toro-admin-repo/.git/objects/78/56dba3d18cc624aeb6d1bf6b5106a5869c0dfe": "8202e585dca8b2431218a3441b58c616",
"toro-admin-repo/.git/objects/aa/fa60ca5554ad7580ada3683eaa9e3e353bcca0": "a30bd8e9d0697bb7a6544f23159b68ae",
"toro-admin-repo/.git/objects/d3/49885d2b2476bd531efb49bd3eaa7a41a9fd65": "27be5c8f1ffacb3f5b6217e3446c430a",
"toro-admin-repo/.git/objects/pack/pack-68f0019ba9ffc254f4ddea4b896c0ccfbd2c3ff9.idx": "161a79819a5451f82df6ac04f91900b5",
"toro-admin-repo/.git/objects/pack/pack-68f0019ba9ffc254f4ddea4b896c0ccfbd2c3ff9.pack": "30f8606e0edac92c7b251da0222d11b0",
"toro-admin-repo/.git/objects/pack/pack-68f0019ba9ffc254f4ddea4b896c0ccfbd2c3ff9.rev": "38597bf7481fc4ec01f179e8b0403a18",
"toro-admin-repo/.git/packed-refs": "e659f3f7cd3d7d49e720ccfa11ee0aab",
"toro-admin-repo/.git/refs/heads/main": "56a6b36fb3e906825b129f5a2e39d46a",
"toro-admin-repo/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"toro-admin-repo/.git/refs/remotes/origin/main": "56a6b36fb3e906825b129f5a2e39d46a",
"toro-admin-repo/assets/AssetManifest.bin": "185aee921109f4920e1fa88876c1ad2c",
"toro-admin-repo/assets/AssetManifest.bin.json": "b480aca8ebaf58a9d1160b154b69459a",
"toro-admin-repo/assets/assets/images/toro_logo.png": "a4c987aa6a9206bba51eab9ab63ff372",
"toro-admin-repo/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"toro-admin-repo/assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"toro-admin-repo/assets/NOTICES": "7ccc790ce022f1a6b665ee2e7fcb784e",
"toro-admin-repo/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"toro-admin-repo/assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"toro-admin-repo/assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"toro-admin-repo/assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"toro-admin-repo/canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"toro-admin-repo/canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"toro-admin-repo/canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"toro-admin-repo/canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"toro-admin-repo/canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"toro-admin-repo/canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"toro-admin-repo/canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"toro-admin-repo/canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"toro-admin-repo/canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"toro-admin-repo/canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"toro-admin-repo/canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"toro-admin-repo/canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"toro-admin-repo/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"toro-admin-repo/flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"toro-admin-repo/flutter_bootstrap.js": "2a939aa2e82be2885498197d63d1ac90",
"toro-admin-repo/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"toro-admin-repo/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"toro-admin-repo/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"toro-admin-repo/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"toro-admin-repo/index.html": "cad0816203afb0790c6eca30e94cb37a",
"toro-admin-repo/main.dart.js": "67bf1582ba09b7d30032605e40c2c0e3",
"toro-admin-repo/manifest.json": "a51884fcdc265b01907ac6ba51eb7fcb",
"toro-admin-repo/version.json": "afbfb21d15ed29f690aab0c9d6bdc068",
"version.json": "afbfb21d15ed29f690aab0c9d6bdc068"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
