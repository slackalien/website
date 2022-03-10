import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const WikiTemplate = ({ data }: any) => {
  const content = data.markdownRemark
  return (
    <Layout>
      <Seo title="Visokica Wiki" />
      <div className="container py-5">
        <section dangerouslySetInnerHTML={{ __html: content.html }} />
      </div>
    </Layout>
  )
}

export default WikiTemplate

export const pageQuery = graphql`
  query WikiBySlug($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
    }
  }
`
