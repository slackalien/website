import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import "./layout.scss"

import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"

import DropdownItem from "./navbar/NavDropdownItem"
import NavbarToggler from "./navbar/NavbarToggler"
import NavLink from "./navbar/NavLink"

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
    <Container fluid className="p-0 d-flex flex-column min-vh-100">
      <Navbar variant="dark" bg="primary" expand="md">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            {data.site.siteMetadata?.title || `Title`}
          </Navbar.Brand>
          <NavbarToggler />
          <Navbar.Collapse id="main-navbar">
            <Nav as="ul" className="me-auto mb-2 mb-md-0">
              <NavDropdown title="Dejavnosti" id="nav-dejavnosti">
                <DropdownItem to="/visokovanje/">Visokovanje</DropdownItem>
                <DropdownItem to="/delavnice/">Delavnice</DropdownItem>
                <DropdownItem to="/vesoljska-mreza/">
                  Vesoljska mreža
                </DropdownItem>
              </NavDropdown>
              <NavLink to="/za-zacetnike/">Za začetnike</NavLink>
              <NavLink to="/varnost/">Varnost</NavLink>
              <NavLink to="/prirocnik/">Priročnik</NavLink>
              <NavLink to="/kontakt/">Kontakt</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container as="main" className="py-5">
        {children}
      </Container>
      <Container as="footer" className="bg-alien p-4 text-center mt-auto">
        <div className="py-4">© 2022 SlackAlien</div>
      </Container>
    </Container>
  )
}

export default Layout
