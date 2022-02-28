module.exports = {
  siteMetadata: {
    title: `SlackAlien`,
    description: `SlackAlien highline team from Slovenia`,
    author: `Bojan Hribernik`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    /*
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `11811990842`,
      },
    },
    */
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
        icon: `src/images/slackalien.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
  ],
}
