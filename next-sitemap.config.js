/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.aventurinetechsolutions.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/api/*'],
  outDir: './out',
}
