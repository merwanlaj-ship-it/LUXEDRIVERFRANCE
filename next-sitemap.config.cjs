const siteUrl = process.env.SITE_URL || 'https://majesticvans.com';

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  exclude: ['/api/*'],
  alternateRefs: [
    {
      href: `${siteUrl}/fr`,
      hreflang: 'fr'
    },
    {
      href: `${siteUrl}/en`,
      hreflang: 'en'
    }
  ]
};
