import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Navbar from "./navbar"
import "./layout.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="container-fluid p-0 d-flex flex-column min-vh-100">
      <Navbar siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main className="">{children}</main>
      <footer className="bg-alien p-4 text-center mt-auto">
        <div className="py-4">&copy; 2022 SlackAlien</div>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
