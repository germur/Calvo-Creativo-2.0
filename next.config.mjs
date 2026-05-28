/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // ⚡ Política: SIN trailing slash. Convención moderna de Next 13+.
    // URLs más limpias, menos redirects, Netlify lo respeta por defecto.
    trailingSlash: false,

    async redirects() {
        return [
            // ================================================================
            // 0. RENAME INTERNO: seo-fight-club → calvo-fight-club
            // ================================================================
            {
                source: '/lab/seo-fight-club/:slug*',
                destination: '/lab/calvo-fight-club/:slug*',
                permanent: true,
            },

            // ================================================================
            // 1. PÁGINAS CORE DE LA VERSIÓN LOVABLE (críticos — tenían tráfico/backlinks)
            // ================================================================
            {
                source: '/contact',
                destination: '/contacto',
                permanent: true,
            },
            {
                source: '/about',
                destination: '/el-artista',
                permanent: true,
            },
            {
                source: '/how-we-work',
                destination: '/consultoria',
                permanent: true,
            },
            {
                source: '/privacy-policy',
                destination: '/politica-privacidad',
                permanent: true,
            },
            {
                source: '/terms-of-service',
                destination: '/terminos',
                permanent: true,
            },
            {
                source: '/cookie-policy',
                destination: '/politica-privacidad',
                permanent: true,
            },

            // ================================================================
            // 2. RECURSOS Y MAPAS
            // ================================================================
            {
                source: '/resources',
                destination: '/lab',
                permanent: true,
            },
            {
                source: '/sitemap',
                destination: '/sitemap.xml',
                permanent: true,
            },

            // ================================================================
            // 3. SERVICIOS ESPECÍFICOS DE LOVABLE → OFERTA ACTUAL
            // ================================================================

            // Auditoría y Estrategia → Consultoría
            {
                source: '/services/seo-audit',
                destination: '/consultoria',
                permanent: true,
            },
            {
                source: '/services/seo-strategy',
                destination: '/consultoria/estrategia-contenidos-autoridad',
                permanent: true,
            },

            // Contenido y Narrativa
            {
                source: '/services/content-marketing',
                destination: '/servicios/narrativa',
                permanent: true,
            },
            {
                source: '/services/digital-storytelling-services/:slug*',
                destination: '/servicios/narrativa',
                permanent: true,
            },

            // ⭐ Automatización SEO → equivalente exacto (mejor herencia de autoridad)
            {
                source: '/services/seo-automation/:slug*',
                destination: '/consultoria/automatizacion-seo-ia',
                permanent: true,
            },
            {
                source: '/services/seo-automation',
                destination: '/consultoria/automatizacion-seo-ia',
                permanent: true,
            },

            // Ecommerce y Local
            {
                source: '/services/ecommerce-seo',
                destination: '/servicios/automatizacion',
                permanent: true,
            },
            {
                source: '/services/local-seo-optimization',
                destination: '/consultoria',
                permanent: true,
            },
            {
                source: '/services/google-business-profile',
                destination: '/consultoria',
                permanent: true,
            },

            // Branding Personal
            {
                source: '/services/personal-branding-consulting/:slug*',
                destination: '/el-artista',
                permanent: true,
            },

            // ================================================================
            // 4. REGLAS GENERALES (cazatodo para URLs viejas de Lovable)
            // ================================================================

            // NOTA: las páginas /services/strategic-seo-consulting/* (ciudades FL)
            // NO se redirigen aquí. Se interceptan en public/_redirects con un
            // 410 Gone, porque next.config no puede emitir 410 y un 301 a
            // /consultoria sería un soft-404 (Google no transfiere autoridad).

            // Cualquier otro servicio en inglés → Consultoría
            {
                source: '/services/:slug*',
                destination: '/consultoria',
                permanent: true,
            },

            // Casos de éxito
            {
                source: '/case-studies/:slug*',
                destination: '/casos',
                permanent: true,
            },

            // ⭐ FIX CRÍTICO: el blog antiguo en inglés NO tiene equivalentes ES
            // con el mismo slug. El :slug* en destino creaba 301 → 404.
            // Mandamos todo al hub /liner-notes.
            {
                source: '/blog/:slug*',
                destination: '/liner-notes',
                permanent: true,
            },
            {
                source: '/blog',
                destination: '/liner-notes',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
