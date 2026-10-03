/*
 * Service worker mínimo do Estácio Campus Digital.
 *
 * Existe por dois motivos:
 *   1. o Chrome só oferece "Instalar app" se houver um SW com handler de fetch;
 *   2. dá para abrir o app sem rede, caindo no cache.
 *
 * Estratégia: network-first com fallback para cache. Assim um deploy novo
 * aparece na primeira abertura com rede, sem precisar limpar cache na mão —
 * o inverso (cache-first) deixaria a carteirinha congelada numa versão velha.
 */

const CACHE = 'estacio-v1';

// Casca mínima para a primeira pintura offline.
const PRECACHE = ['/', '/index.html', '/manifest.webmanifest', '/icon-192.png', '/icon-512.png'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE)
      .then((cache) => cache.addAll(PRECACHE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((nomes) => Promise.all(nomes.filter((n) => n !== CACHE).map((n) => caches.delete(n))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;

  // Só GET do próprio domínio: POST e CDN de fonte passam direto.
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) {
    return;
  }

  event.respondWith(
    fetch(request)
      .then((resposta) => {
        // Guarda uma cópia para quando faltar rede.
        const copia = resposta.clone();
        caches.open(CACHE).then((cache) => cache.put(request, copia));
        return resposta;
      })
      .catch(async () => {
        const doCache = await caches.match(request);
        if (doCache) return doCache;
        // Navegação sem rede e sem cache da rota: devolve a casca do SPA.
        if (request.mode === 'navigate') {
          const shell = await caches.match('/index.html');
          if (shell) return shell;
        }
        return Response.error();
      })
  );
});
