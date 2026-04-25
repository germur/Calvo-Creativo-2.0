/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://calvocreativo.com',
    generateRobotsTxt: true,
    // ⚡ SIN trailing slash — consistente con next.config.mjs
    trailingSlash: false,
    exclude: [
        '/lab/oracle',
        '/admin/*',
        '/lab/opinion/_template', // template interno, no es contenido real
        '/cv', // noindex — shared directly, not for broad crawling
    ],
    robotsTxtOptions: {
        additionalSitemaps: [
            'https://calvocreativo.com/sitemap-0.xml',
        ],
    },
};
