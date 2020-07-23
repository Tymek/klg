module.exports = {
  siteMetadata: {
    title: `Magda Klag`,
    description: `Design`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Magda Klag`,
        short_name: `Magda Klag`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: 'gatsby-plugin-matomo',
      options: {
        siteId: '1',
        matomoUrl: 'https://analytics.scrlk.pl',
        siteUrl: 'https://magdaklag.pl',
        requireConsent: false,
        disableCookies: true,
        dev: false
      }
    }
    `gatsby-plugin-preact`,
    `gatsby-plugin-brotli`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-typescript`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
