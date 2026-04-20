/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // ⚡ Política: SIN trailing slash. Convención moderna de Next 13+.
    // URLs más limpias, menos redirects, Netlify lo respeta por defecto.
    trailingSlash: false,

    async redirects() {
        return [
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

            // Blog antiguo
            {
                source: '/blog/:slug*',
                destination: '/liner-notes/:slug*',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
