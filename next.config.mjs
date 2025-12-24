/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'picsum.photos',
            },
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
            },
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
            }
        ],
    },
    async redirects() {
        return [
            // Legacy Redirects (SEO Protection)
            { source: '/how-we-work', destination: '/el-artista', permanent: true },
            { source: '/resources', destination: '/lab', permanent: true },
            { source: '/cookie-policy', destination: '/politica-privacidad', permanent: true },
            { source: '/case-studies', destination: '/wins', permanent: true },
            { source: '/case-studies/:slug*', destination: '/wins', permanent: true }, // Catch-all for specific cases
            { source: '/about', destination: '/el-artista', permanent: true },
            { source: '/sitemap', destination: '/mapa-del-sitio', permanent: true },
            { source: '/contact', destination: '/contacto', permanent: true },
            { source: '/blog/:slug*', destination: '/liner-notes/:slug*', permanent: true },
            { source: '/blog', destination: '/liner-notes', permanent: true },
            { source: '/services', destination: '/consultoria', permanent: true },

            // Service Specific Redirects - Mapping to new Silos
            { source: '/services/strategic-seo-consulting/:slug*', destination: '/servicios/composicion', permanent: true }, // Strategy -> Composicion
            { source: '/services/strategic-seo-consulting', destination: '/servicios/composicion', permanent: true },

            { source: '/services/seo-automation/:slug*', destination: '/servicios/automatizacion', permanent: true }, // Automation -> Automatizacion
            { source: '/services/seo-automation', destination: '/servicios/automatizacion', permanent: true },

            { source: '/services/digital-storytelling-services/:slug*', destination: '/servicios/narrativa', permanent: true }, // Storytelling -> Narrativa
            { source: '/services/digital-storytelling-services', destination: '/servicios/narrativa', permanent: true },

            { source: '/services/personal-branding-consulting/:slug*', destination: '/el-artista', permanent: true }, // Personal Brand -> El Artista
            { source: '/services/personal-branding-consulting', destination: '/el-artista', permanent: true },

            // Old Structure Redirects
            { source: '/lado-a', destination: '/consultoria', permanent: true },
            { source: '/lado-b', destination: '/lab', permanent: true },
        ];
    },
};

export default nextConfig;
