module.exports = {
  siteMetadata: {
    title: `Becky365`,
    description: `Becky's photography site`,
    author: `@RCAbney`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Raleway`, `Oswald`],
      },
    },
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `becky365.com`,
        protocol: `http`,
        hostingWPCOM: false,
        useACF: false,
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
