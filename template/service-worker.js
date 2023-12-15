/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["adlcp_rootv1p2.xsd","e2d3872c7509f6e3f1fc7ab7c07eee52"],["analytics-frame.html","d37bde920ca1cf9f811fc5618e971169"],["game.xml","7bc8da4cb891f88ed6ddd817ce275780"],["html5/data/js/5y502pczfg6.js","3921098176486c64e0213c1f7841ae13"],["html5/data/js/62kiIcIRMne.js","9ad46efe5bed686f41b5750c36718923"],["html5/data/js/6B7IYhen9A6.js","3ce909fe708984a7eb11fb5d7b3a82bb"],["html5/data/js/6fzLTvDbjxH.js","5c62bfee1c8edd0fd13c02dce181214e"],["html5/data/js/6qvn0rkDMLc.js","b70513c57053b427bb3a0acebb23ec33"],["html5/data/js/data.js","7215ecb9f39baf22d2022da6b6f5733c"],["html5/data/js/frame.js","b5c442863b3ce4b6ef97c80f501cabfd"],["html5/data/js/paths.js","bb2cb7d6929147611094664e6f07965f"],["html5/lib/hls/hls.min.js","72feb89739e373a5c77de8b11ae9ad15"],["html5/lib/scripts/bootstrapper.min.js","3799ad37154c0a09790fd86fe07ed0ac"],["html5/lib/scripts/frame.desktop.min.js","980b80524afde12d0fd53cc71133066f"],["html5/lib/scripts/frame.mobile.min.js","1bc6c9b354559d4ba7ed3bf951896998"],["html5/lib/scripts/slides.min.js","ae027774f213f1711cdd2b3f047259bf"],["html5/lib/stylesheets/desktop.min.css","7fe12fe762a1184bace1c33ed0c8005d"],["html5/lib/stylesheets/mobile-fonts/open-sans-bold.woff","72862e7cf19603ad24f26baf86dd0e08"],["html5/lib/stylesheets/mobile-fonts/open-sans-light.woff","0d0d7107450f05b72a4507d0d7687dd1"],["html5/lib/stylesheets/mobile-fonts/open-sans-regular.woff","ce659615885f33d928eb7fe276574106"],["html5/lib/stylesheets/mobile.min.css","118b936867f83a9ade7eafd27d692bd2"],["ims_xml.xsd","89055bb2e625a93f60009de29d2b0e76"],["imscp_rootv1p1p2.xsd","3015eb0a6401f555e0cfc809830a9c57"],["imsmanifest.xml","ee65904747da6f038f6cfa6aeedb896f"],["imsmd_rootv1p2p1.xsd","f1b6e05b70fe70f539e7c76d7c0077a8"],["index.html","ac5a78c90cd4064e44a4061a0cdcdc45"],["index_lms.html","ed50797c43db008cf12edece409926d1"],["lms/AICCComm.html","8514c997f9a65e702d4b64dd2b81420f"],["lms/blank.html","d43b6cf5e11a6061f77d8a02237f4b4b"],["lms/browsersniff.js","1eb8395f20b1caa5ca9b4059a3c085e2"],["lms/goodbye.html","803cc643a3b470923dc7c0c90c6c73b9"],["lms/scormdriver.js","fb01de94a5b61805b4a043a00a035233"],["manifest.json","66f0ad3ec015a110fe0d294bc1697d50"],["maskable_192.png","8f660f7d69c88127df17b86ee0ee29bc"],["meta.xml","8374689eac66362b148b4ad9323cc58d"],["mobile/5YtWma9ef0f.png","7efcd930a2c129884b3d8214322eebc0"],["mobile/5aSwNsvwB2E.png","7c7be06db06506bdaf43c78dde52a98e"],["mobile/5ffaKLVgQ95.png","e136323bc031a180b33c463bbf0758e6"],["mobile/5ikGIr46WC6.png","e9383530ba5acb65d7b10155e068dbd1"],["mobile/5mmUk9VVyz7.png","26ecc76402d2e0f3b48219719e7f0d62"],["mobile/5rQ9705afuJ.png","016b04c3005eea393d613dcd4796daf2"],["mobile/5sVPP6yl0u1.png","c851c0321249d705ce74a81c971c075b"],["mobile/5tGO46GyZZB.png","f5989c79ffc3aba00d657f5e1db3a51b"],["mobile/5wl4SG78BQR.png","ffd8d6a52ee52d743ef2a66a24934ef5"],["mobile/5zHaozqvXz6.png","384f6563040bcfd3f25cda76d3f14ef7"],["mobile/60OQhIizm9E.png","7b8b77594ab5e720f4a87e60cf7e7658"],["mobile/60PSoWSZ84g.png","43172e6dbeed6f1c590a20558f77cc95"],["mobile/62359J9zxg7.png","f2a7181864e60f821f43d8b2e2547343"],["mobile/63lTViKpiO9.png","7b6dd26804a90586c1690f5f193becd2"],["mobile/67QJ73TaqoM.png","9ffd2c8568db9f34d8c65b01b4f17564"],["mobile/6Dy6HIRrtH7.png","12200931d6026dae797f34eafbeed432"],["mobile/6EOO4Ts6yLA.png","e30aebcca1588fe10fd32de68ca9dd7c"],["mobile/6K5LBYu8Vfp.png","8a0de2426760250b026b3dd7f86e1347"],["mobile/6TB8Ks9haXt.png","2f3577a752ce55b86c2f0be9a1fc3b51"],["mobile/6Uk9Fm9Hiok.png","4be71196a703c8fed75ec8dba3ebaec6"],["mobile/6WIB0f1EsOl.png","b6236e71e3040b142d6b0451bf9bff87"],["mobile/6Z7ztrqu1B8.png","fc8be52639ed4094169c174543f8d916"],["mobile/6aYJYRL4iSa.png","3f688b12b048a36cb88af194c6407af6"],["mobile/6eRUs4sxfAB.png","d02dc3b940229aa82a690ca473b50610"],["mobile/6jNbkIzRcw1.jpg","d6b8dd5edf303bef71951d161f06216c"],["mobile/6rI93r31rZO.png","8c40931a64f16287b614e08185899c57"],["mobile/Shape5XRWSjotMfZ.png","65c9c031ce2c84dba3c8fdb6d80e3272"],["mobile/Shape5aXyydY3ZZJ.png","65c9c031ce2c84dba3c8fdb6d80e3272"],["mobile/Shape5fxVjxolNHd.png","65c9c031ce2c84dba3c8fdb6d80e3272"],["mobile/Shape6GQeBnFnNAd.png","227eae47dd4bbd0e4eee826299e627b6"],["mobile/Shape6HLT2jfeeRO.png","227eae47dd4bbd0e4eee826299e627b6"],["monster_192.png","fb7fc1dd04d6614b9b06423b76316d85"],["monster_512.png","7f94721f80779cb0f352236d29c54ecb"],["myscripts.js","ba9bc69b098f4f2fdf27e9afe79d1481"],["story.html","ed50797c43db008cf12edece409926d1"],["story_content/5j7NLuDmWC4_44100_56_0.mp3","ba288d35ced47e1a3733de4ca17e3841"],["story_content/5rupxExn7G9_44100_56_0.mp3","756a9dfdcac9e958686f1959cf2f7531"],["story_content/5yw85Ndg8fn_captions.js","5ed08f21fc11b828c08cf2bb91474596"],["story_content/67hnSIIs41X_44100_56_0.mp3","407029e6522dee808d817fd38b100bbd"],["story_content/6JJCO0CGypH_44100_56_0.mp3","906e8c8f92632ba686019bbca2277e73"],["story_content/6ORrELc2yc3_44100_56_0.mp3","009ff4e5979b1801c211f0c2ddc2c83c"],["story_content/6S88zXXFb3G.png","baceaed60074444c2d29a18185f0806f"],["story_content/6WPhknmtCWc_44100_56_0.mp3","c9dd1447e6d871ae3e246eb3bbc0b14a"],["story_content/6Wgv1REY32l_44100_56_0.mp3","67d9e189283a2695302c5b85376c02ad"],["story_content/6hoRLpWqf0m_44100_56_0.mp3","f769da02915d49bb353fffb9899f0196"],["story_content/6mbG0EwSzXG_44100_56_0.mp3","3a5091dc67fa066830225e5b63c91725"],["story_content/frame.xml","96935529e91a67be5ba56e99439d6308"],["story_content/thumbnail.jpg","e65e8aa7898012c1035e10137eddbc3d"],["story_content/user.js","5e6096942804271941b73f038ec43d1c"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







