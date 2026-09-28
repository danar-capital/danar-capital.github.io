const CACHE="loreen-wheel-v8";
const FILES=["./","./index.html","./manifest.json","./icon.svg"];
self.addEventListener("install",event=>event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(FILES)).then(()=>self.skipWaiting())));
self.addEventListener("activate",event=>event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim())));
self.addEventListener("fetch",event=>{
  if(event.request.method!=="GET")return;
  const isPage=event.request.mode==="navigate"||new URL(event.request.url).pathname.endsWith("/index.html");
  if(isPage){
    event.respondWith(fetch(event.request).then(response=>{
      if(response.ok){const copy=response.clone();caches.open(CACHE).then(cache=>cache.put("./index.html",copy))}
      return response
    }).catch(()=>caches.match("./index.html").then(page=>page||caches.match("./"))));
    return
  }
  event.respondWith(caches.match(event.request).then(cached=>cached||fetch(event.request).then(response=>{
    if(response.ok){const copy=response.clone();caches.open(CACHE).then(cache=>cache.put(event.request,copy))}
    return response
  }).catch(()=>caches.match("./index.html"))))
});
