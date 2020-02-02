module.exports = {
  siteMetadata: {
    title: `Zoraida Cabrera-Mieles — Designer & Researcher`,
    description: `Zoraida Cabrera-Mieles User Experience Designer portfolio`,
    author: `@zoracreates`,
    keywords:  `UX, User Experience, User Interface, User Research, Designer, HTML, CSS, JavaScript, Zoraida Cabrera-Mieles, Zoraida Cabrera"`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    `gatsby-plugin-mdx`,
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
        background_color: `#E5781A`,
        theme_color: `E5781A`,
        display: `minimal-ui`,
        icon: `src/images/z-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
