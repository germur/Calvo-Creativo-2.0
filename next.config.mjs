/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // Mantenlo en true si tus canonicals tienen / al final
    trailingSlash: true,

    async redirects() {
        return [
            // ---------------------------------------------------------
            // 1. RECURSOS Y MAPAS (Lo que fallaba en el reporte)
            // ---------------------------------------------------------
            {
                source: '/resources',
                destination: '/lab', // Redirigimos recursos a tu "Lab" que es donde tienes herramientas y guías
                permanent: true,
            },
            {
                source: '/sitemap/',
                destination: '/sitemap.xml', // Corrección técnica para bots
                permanent: true,
            },

            // ---------------------------------------------------------
            // 2. SERVICIOS ESPECÍFICOS (Del reporte CSV a tu nueva oferta)
            // ---------------------------------------------------------

            // Auditoría y Estrategia -> Consultoría
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

            // Ecommerce y Local -> Consultoría (o Automatización si prefieres)
            {
                source: '/services/ecommerce-seo',
                destination: '/servicios/automatizacion', // Asumo que automatización encaja bien con ecom
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

            // ---------------------------------------------------------
            // 3. REGLAS GENERALES (El "cazatodo" para lo que sobre)
            // ---------------------------------------------------------

            // Cualquier otro servicio en inglés se va a Consultoría
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
