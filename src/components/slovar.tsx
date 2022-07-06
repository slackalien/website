import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Nav from "react-bootstrap/Nav"

type Props = {
  location: any
}

type Data = {
  prirocnik: {
    edges: [
      {
        node: {
          headings: [{ value: string }]
          fields: {
            slug: string
          }
        }
      }
    ]
  }
}

const Prirocnik = ({ location }: Props) => {
  const { prirocnik } = useStaticQuery<Data>(graphql`
    query SlovarSidebarQuery {
      prirocnik: allMarkdownRemark(
        sort: { order: ASC, fields: headings___value }
      ) {
        edges {
          node {
            headings(depth: h1) {
              value
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <div className="py-5 pt-0 pt-md-5">
      <hr className="my-5 d-md-none" />
      <h2>Priročnik</h2>
      <Nav variant="pills">
        {prirocnik.edges.map(({ node }) => {
          const title = node.headings[0].value
          const url = `/prirocnik/${node.fields.slug.replaceAll("/", "")}`
          const active = location.pathname === url
          return (
            <Nav.Link as={Link} key={url} to={url} active={active}>
              {title}
            </Nav.Link>
          )
        })}
      </Nav>
    </div>
  )
}

export default Prirocnik
