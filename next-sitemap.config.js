/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://calvocreativo.com',
    generateRobotsTxt: true,
    exclude: ['/lab/oracle', '/admin/*'], // Exclude private/removed pages
    robotsTxtOptions: {
        additionalSitemaps: [
            'https://calvocreativo.com/sitemap-0.xml', // Default split
        ],
    },
}
