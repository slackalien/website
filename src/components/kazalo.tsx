import * as React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import Nav from "react-bootstrap/Nav"

type Props = {
  location: any
}

const Prirocnik = ({ location }: Props) => {
  const { prirocnik } = useStaticQuery<Queries.KazaloSidebarQuery>(graphql`
    query KazaloSidebar {
      prirocnik: allMarkdownRemark(
        sort: { order: ASC, fields: frontmatter___title }
      ) {
        edges {
          node {
            frontmatter {
              title
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
    <div className="py-5 pt-md-0">
      <h1>Priročnik</h1>
      <Nav variant="pills">
        {prirocnik.edges.map(({ node }) => {
          const title = node?.frontmatter?.title
          const url = `/prirocnik${node.fields?.slug}`
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
