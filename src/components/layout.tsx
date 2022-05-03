import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import "./layout.scss"

import Header from "./header"

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props) => {
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
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main className="">{children}</main>
      <footer className="bg-alien p-4 text-center mt-auto">
        <div className="py-4">© 2022 SlackAlien</div>
      </footer>
    </div>
  )
}

export default Layout
