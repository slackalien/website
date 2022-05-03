import * as React from "react"
import { Link } from "gatsby"
import { LinkGetProps } from "@reach/router"

import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"

import "./header.scss"

const getLinkProps = ({ isCurrent }: LinkGetProps) => {
  return isCurrent
    ? { className: "nav-link active" }
    : { className: "nav-link" }
}

const getDropdownProps = ({ isCurrent }: LinkGetProps) => {
  return isCurrent
    ? { className: "dropdown-item active" }
    : { className: "dropdown-item" }
}

const NavbarToggle = () => {
  return (
    <button
      className="navbar-toggler collapsed"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#main-navbar"
      aria-controls="main-navbar"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon">
        <span />
        <span />
        <span />
        <span />
      </span>
    </button>
  )
}

const DropdownItem = (props: any) => {
  return <NavDropdown.Item as={Link} getProps={getDropdownProps} {...props} />
}

const NavLink = (props: any) => {
  return <Nav.Link as={Link} getProps={getLinkProps} {...props} />
}

type Props = {
  siteTitle: string
}

const Header = ({ siteTitle }: Props) => {
  return (
    <Navbar variant="dark" bg="primary" expand="md">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          {siteTitle}
        </Navbar.Brand>
        <NavbarToggle />
        <Navbar.Collapse id="main-navbar">
          <Nav as="ul" className="me-auto mb-2 mb-md-0">
            <NavDropdown title="Dejavnosti" id="nav-dejavnosti">
              <DropdownItem to="/visokovanje">Visokovanje</DropdownItem>
              <DropdownItem to="/delavnice">Delavnice</DropdownItem>
              <DropdownItem to="/vesoljska-mreza">Vesoljska mreža</DropdownItem>
            </NavDropdown>
            <NavLink to="/varnost">Varnost</NavLink>
            <NavLink to="/prirocnik">Priročnik</NavLink>
            <NavLink to="/kontakt">Kontakt</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
