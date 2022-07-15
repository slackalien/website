/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

import type { GatsbyNode } from "gatsby"

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

export const onCreateNode: GatsbyNode["onCreateNode"] = ({
  node,
  actions,
  getNode,
}) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
  reporter,
}) => {
  const { createPage } = actions

  const template = path.resolve(`./src/templates/prirocnik.tsx`)

  const result = await graphql<Queries.CreatePrirocnikPagesQuery>(`
    query CreatePrirocnikPages {
      allMarkdownRemark {
        nodes {
          id
          fields {
            slug
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  const pages = result.data?.allMarkdownRemark.nodes

  if (pages && pages.length > 0) {
    pages.forEach(post => {
      createPage({
        path: `/prirocnik${post.fields?.slug}`,
        component: template,
        context: {
          id: post.id,
        },
      })
    })
  }
}

export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] =
  ({ actions }) => {
    actions.createTypes(`
    type Site {
      siteMetadata: SiteMetadata!
    }
    type SiteMetadata {
      title: String!
      description: String!
      author: String!
      siteUrl: String!
    }
    type ImageSharpOriginal {
      height: Float!
      src: String!
      width: Float!
    }
    type ImageSharpResize {
      aspectRatio: Float!
      height: Int!
      originalName: String!
      src: String!
      tracedSVG: String!
      width: Int!
    }
    type ImageSharpFixed {
      aspectRatio: Float!
      base64: String!
      height: Float!
      originalName: String!
      src: String!
      srcSet: String!
      srcSetWebp: String!
      srcWebp: String!
      tracedSVG: String!
      width: Float!
    }
    type ImageSharpFluid {
      aspectRatio: Float!
      base64: String!
      originalImg: String!
      originalName: String!
      presentationHeight: Int!
      presentationWidth: Int!
      sizes: String!
      src: String!
      srcSet: String!
      srcSetWebp: String!
      srcWebp: String!
      tracedSVG: String!
    }
  `)
  }
