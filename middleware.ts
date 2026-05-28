import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Middleware — intercepta rutas que necesitan 410 Gone.
 *
 * Next.js no puede emitir 410 desde redirects() en next.config.mjs
 * (solo soporta 301/302/307/308). Y @netlify/plugin-nextjs intercepta
 * el routing antes que netlify.toml [[redirects]], así que force=true
 * tampoco funciona.
 *
 * Este middleware corre ANTES que las pages/redirects de Next,
 * así que aquí sí podemos devolver 410.
 */

const GONE_PATTERNS = [
    /^\/services\/strategic-seo-consulting(\/|$)/,
];

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    for (const pattern of GONE_PATTERNS) {
        if (pattern.test(pathname)) {
            return new NextResponse(
                '<!DOCTYPE html><html><head><title>410 Gone</title></head><body><h1>410 Gone</h1><p>This page has been permanently removed.</p></body></html>',
                {
                    status: 410,
                    headers: { 'Content-Type': 'text/html; charset=utf-8' },
                }
            );
        }
    }

    return NextResponse.next();
}

// Solo corre en las rutas que nos interesan (no penaliza el resto del sitio)
export const config = {
    matcher: ['/services/strategic-seo-consulting/:path*'],
};
