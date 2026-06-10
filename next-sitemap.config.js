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
        '/gracias', // thank-you page — no indexar
        '/newsletter', // signup form — no indexar
        '/seo/*', // PSEO ciudades - noindex
        '/industrias/*', // PSEO industrias - noindex
        '/wins', // duplica /casos, en ingles - noindex
        '/servicios/automatizacion', // 301 -> consultoria/automatizacion-seo-ia
        '/booking', // noindex - duplica intencion con /contacto
        '/contratar', // noindex - duplica intencion con /contacto
        '/mapa-del-sitio', // sitemap HTML - no indexar
    ],
};
