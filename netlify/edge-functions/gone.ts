export default async function gone(request: Request, context: { next: () => Promise<Response> }) {
  if (/^\/services\/(strategic-seo-consulting|personal-branding-consulting|seo-automation|digital-storytelling-services)(\/|$)/.test(new URL(request.url).pathname)) {
    return new Response('<!doctype html><html lang="es"><head><meta charset="utf-8"><meta name="robots" content="noindex"><title>Página retirada | Calvo Creativo</title></head><body><h1>Esta página se ha retirado</h1><p><a href="/consultoria">Ver servicios actuales</a></p></body></html>', {
      status: 410, headers: { 'Content-Type': 'text/html; charset=utf-8', 'X-Robots-Tag': 'noindex' },
    });
  }
  return context.next();
}
