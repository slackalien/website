import * as React from "react"
import { LinkGetProps } from "@reach/router"
import { GatsbyLinkProps, Link } from "gatsby"

import NavDropdown from "react-bootstrap/NavDropdown"
import { DropdownItemProps } from "react-bootstrap/DropdownItem"

const getProps = ({ isCurrent }: LinkGetProps) => {
  return isCurrent
    ? { className: "dropdown-item active" }
    : { className: "dropdown-item" }
}

type Props = DropdownItemProps & GatsbyLinkProps<{}>

const NavDropdownItem = (props: Props) => {
  return <NavDropdown.Item as={Link} getProps={getProps} {...props} />
}

export default NavDropdownItem
