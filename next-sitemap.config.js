/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.aventurinetechsolutions.com',
  generateRobotsTxt: false,
  generateIndexSitemap: false,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/api/*', '/not-found', '/not-found/*', '/robots.txt', '/sitemap.xml'],
  outDir: './out',
  transform: async (config, path) => {
    // Set homepage priority to 1.0
    if (path === '/') {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 1.0,
        lastmod: new Date().toISOString(),
      }
    }
    // Services pages get higher priority
    if (path.startsWith('/services')) {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      }
    }
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    }
  },
}
