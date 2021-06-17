module.exports = {
  siteMetadata: {
    title: `Zoraida Cabrera-Mieles — Designer`,
    description: `Zoraida Cabrera-Mieles Design portfolio`,
    author: `@zoracreates`,
    keywords:  `Design Engineering, Web Design, Front End Development, Front End Design, UX, User Experience, User Interface, User Research, Designer, HTML, CSS, JavaScript, Zoraida Cabrera-Mieles, Zoraida Cabrera"`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
        ],
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
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#E5781A`,
        theme_color: `#E5781A`,
        display: `minimal-ui`,
        icon: `src/images/letter-logo-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
