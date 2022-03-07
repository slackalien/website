module.exports = {
  siteMetadata: {
    title: `SlackAlien`,
    description: `Športno društvo SlackAlien`,
    author: `Bojan Hribernik`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `wiki`,
        path: `${__dirname}/src/wiki`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
          `gatsby-remark-responsive-iframe`,
          `gatsby-remark-copy-linked-files`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          precision: 6,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `slackalien-website`,
        short_name: `slackalien`,
        start_url: `/`,
        background_color: `#339933`,
        theme_color: `#339933`,
        display: `standalone`,
        icon: `src/images/logo/slackalien-icon.png`,
      },
    },
    `gatsby-plugin-gatsby-cloud`,
  ],
}
