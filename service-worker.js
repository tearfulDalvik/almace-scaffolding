"use strict";var precacheConfig=[["/404.html","620530e2b9a87a0bb20051603b5594a8"],["/about/index.html","fd7df598bc72d375fa6c647a242dad9d"],["/apple-touch-icon.png","bbe0a0ccc32c7b837867b772d93407f8"],["/assets/svg/amsf.svg","99d5fe2aa6a8aebe8341ca1614cf9b17"],["/assets/svg/heading-image-example.svg","1333ac8a72d14320262327cbab912551"],["/favicon.png","bbe0a0ccc32c7b837867b772d93407f8"],["/favicon.svg","6fd23f87adf6cdfce75166ec31d04d87"],["/index.html","e953628dfd0128299a9d355ec46994b7"],["/logo.png","ecc1a06c8bb990573ad1d8d245bffe74"],["/mask-icon.svg","07b803e22eb033cb270633273e0bf528"],["/note/a-font-born-with-barcodes/index.html","00fdc784858f911c500387c1bca4b697"],["/note/cloudfront-origin-router/index.html","8186a4eb3bd75c95501ad6ebc15f63b1"],["/note/compiling-sqlcipher/index.html","e99372647f9aeb08f07692cf9cc2f835"],["/note/dns/index.html","1de575e19211d273c51c74ae6459afcd"],["/note/email-address-verify/index.html","eccb8f2679d1a2f4743b6c802a8f3e9c"],["/note/index.html","6032620fa177cf5cc72411643e5b454c"],["/note/introducing-rime/index.html","0976cfea9927e09cf343f306d201fb56"],["/note/live-network/index.html","47b085c13af3de654cf5442f349c2884"],["/note/notes-on-discrete-math/index.html","86754682abf198583c7e2330e93c5f75"],["/note/rakishland-authflow/index.html","60795d8703ac235ee2394d14db916cfd"],["/note/time-watching/index.html","99ec993d9b13e81d3e87b3eed790cae1"],["/note/tlsv1.3-with-nginx/index.html","2283f47fae4f8a60515a15554f82843d"],["/note/use-proxy-smtp-server-for-php-mail-function/index.html","53b28eb663aee8fd3edad5e7c15155af"],["/work/calendarista/index.html","0d9d9c80ebbeefc13296282c7acf6347"],["/work/cqupt-rproxy/chs/index.html","6c53cd531401e5daebb674e715ba9cde"],["/work/cqupt-rproxy/index.html","4bd5b58ca717462250be603fa5ce9e4b"],["/work/ctas-debugger/index.html","f414c70b5b5d13b40112ccd9537f834f"],["/work/dalcho/index.html","a71f8ce988cfad4a2494d784264ccc67"],["/work/gitbook-imageviewer/index.html","2040cbd5429a1688e0172280f57c77a2"],["/work/htaa-recruit/index.html","d99f88f805aa9a83306a143874ce9949"],["/work/index.html","3993c3b717d799589a5ec258d502d21c"],["/work/ios-workflows/index.html","879fe64ef0d7c1756b44f0ff19ae5155"],["/work/passport/index.html","eb4e24e9231204e71cab75ea0df3d2b0"],["/work/toefl-seat-availability-checker/index.html","91feabefb6eb1e0a92f6a7223460e8a8"],["/work/travel-shots/index.html","9f186b103fdb43ea5841701f148e314e"],["/work/word-line-spacer/index.html","924e3c67fa75252607167be1e2ba250d"]],cacheName="sw-precache-v3-almace-scaffolding-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then((function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})):Promise.resolve(e)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some((function(e){return n.match(e)}))},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map((function(e){return e.split("=")})).filter((function(e){return t.every((function(t){return!t.test(e[0])}))})).map((function(e){return e.join("=")})).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map((function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,!1);return[a.toString(),r]})));function setOfCachedUrls(e){return e.keys().then((function(e){return e.map((function(e){return e.url}))})).then((function(e){return new Set(e)}))}self.addEventListener("install",(function(e){e.waitUntil(caches.open(cacheName).then((function(e){return setOfCachedUrls(e).then((function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map((function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then((function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then((function(t){return e.put(n,t)}))}))}})))}))})).then((function(){return self.skipWaiting()})))})),self.addEventListener("activate",(function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then((function(e){return e.keys().then((function(n){return Promise.all(n.map((function(n){if(!t.has(n.url))return e.delete(n)})))}))})).then((function(){return self.clients.claim()})))})),self.addEventListener("fetch",(function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));0,t&&e.respondWith(caches.open(cacheName).then((function(e){return e.match(urlsToCacheKeys.get(n)).then((function(e){if(e)return e;throw Error("The cached response that was expected is missing.")}))})).catch((function(t){return fetch(e.request)})))}}));