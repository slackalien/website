import * as React from "react"
import { graphql } from "gatsby"
import type { PageProps } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

type DataProps = {
  markdownRemark: {
    id: string
    excerpt: string
    html: string
    headings: { value: string }[]
    fields: { slug: string }
    frontmatter: {
      title: string
      description: string
      image?: {
        childImageSharp?: {
          resize?: {
            src: string
            height: number
            width: number
          }
        }
      }
    }
  }
}

const PrirocnikTemplate = ({ data, location }: PageProps<DataProps>) => {
  const { excerpt, frontmatter, headings, html } = data.markdownRemark
  return (
    <Layout>
      <Seo
        title={frontmatter.title || headings[0].value}
        description={frontmatter.description || excerpt}
        image={frontmatter.image?.childImageSharp?.resize}
        pathname={location.pathname}
      />
      <div className="container py-5">
        <section dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}

export default PrirocnikTemplate

export const pageQuery = graphql`
  query PrirocnikBySlug($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      headings(depth: h1) {
        value
      }
      fields {
        slug
      }
      frontmatter {
        title
        description
        image: featured {
          childImageSharp {
            resize(width: 1200) {
              src
              height
              width
            }
          }
        }
      }
    }
  }
`