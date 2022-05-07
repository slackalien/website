import * as React from "react"
import { LinkGetProps } from "@reach/router"
import { GatsbyLinkProps, Link } from "gatsby"

import Nav from "react-bootstrap/Nav"
import { DropdownItemProps } from "react-bootstrap/DropdownItem"

const getProps = ({ isCurrent }: LinkGetProps) => {
  return isCurrent
    ? { className: "nav-link active" }
    : { className: "nav-link" }
}

type Props = DropdownItemProps & GatsbyLinkProps<{}>

const NavLink = (props: Props) => {
  return <Nav.Link as={Link} getProps={getProps} {...props} />
}

export default NavLink
