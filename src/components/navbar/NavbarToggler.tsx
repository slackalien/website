import * as React from "react"

import Toggle from "react-bootstrap/NavbarToggle"

import "./NavbarToggler.scss"

const NavbarToggle = () => {
  return (
    <Toggle>
      <span className="navbar-toggler-icon">
        <span />
        <span />
        <span />
        <span />
      </span>
    </Toggle>
  )
}

export default NavbarToggle
