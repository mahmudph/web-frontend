const path = require('path')

module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        components: path.join(__dirname, './src/components/atoms/'),
        assets : path.join(__dirname, './assets/'),
        event_data : path.join(__dirname, './src/content'),
        pages: path.join(__dirname, './src/pages'),
      }
    }
  ],
  siteMetadata: {
    title: 'Home',
    titleTemplate: '%s · Palembang Digital',
    description: 'Grup berbagi informasi seputar IT Development & Digital di daerah Sumatera Selatan',
    image: '/logo.png',
    url: 'https://palembangdigital.org',
    twitterUsername: ''
  }
};
