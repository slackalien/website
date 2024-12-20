/**
 * Implement Gatsby's Config APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

const SITE_URL =
  process.env.NODE_ENV === `production`
    ? `https://slackalien.com`
    : `http://localhost:8000`

module.exports = {
  siteMetadata: {
    title: `SlackAlien`,
    description: `Športno društvo SlackAlien`,
    author: `Bojan Hribernik`,
    siteUrl: SITE_URL,
  },
  graphqlTypegen: true,
  trailingSlash: `always`,
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
        name: `prirocnik`,
        path: `${__dirname}/src/prirocnik`,
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
          {
            resolve: "gatsby-remark-selective-link-rewrite",
            options: {
              sourceInstanceName: "prirocnik",
              pattern: /^([^/]*)$/,
              replace: "/prirocnik/$1/",
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
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: SITE_URL,
      },
    },
    {
      // https://github.com/ifiokjr/gatsby-plugin-next-seo/blob/master/docs/api/index.md
      resolve: `gatsby-plugin-next-seo`,
      options: {
        title: `SlackAlien`,
        titleTemplate: `%s - SlackAlien`,
        description: `Športno društvo SlackAlien`,
        language: `sl`,
        defaultOpenGraphImageWidth: 1200,
        defaultOpenGraphImageHeight: 1200,
        metaTags: [
          {
            property: `keywords`,
            content: `slackline,highline,visokica,ravnotežje`,
          },
        ],
        openGraph: {
          type: `website`,
          locale: `sl_SI`,
          url: SITE_URL,
          title: `SlackAlien`,
          site_name: `SlackAlien`,
          description: `Športno društvo SlackAlien`,
          images: [
            {
              url: `${SITE_URL}/slackalien.png`,
              width: 1600,
              height: 900,
              alt: `SlackAlien`,
            },
          ],
        },
        twitter: {
          //handle: `@handlea`,
          //site: `@sitea`,
          cardType: `summary_large_image`,
        },
        //facebook: {
        //  appId: `1234567890`,
        //},
      },
    },
    `gatsby-plugin-sitemap`,
    //`gatsby-plugin-preload-fonts`,
    `gatsby-plugin-gatsby-cloud`,
    `gatsby-plugin-netlify`,
  ],
}
