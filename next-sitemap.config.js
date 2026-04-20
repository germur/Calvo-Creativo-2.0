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
    ],
    robotsTxtOptions: {
        additionalSitemaps: [
            'https://calvocreativo.com/sitemap-0.xml',
        ],
    },
};
