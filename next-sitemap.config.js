/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.aventurinetechsolutions.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/api/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://www.aventurinetechsolutions.com/sitemap.xml',
    ],
  },
};
