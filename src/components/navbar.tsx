import * as React from "react"
import { Link } from "gatsby"

const isActive = ({ isCurrent }: any) => {
  return isCurrent
    ? { className: "nav-link active" }
    : { className: "nav-link" }
}

const ExactNavLink = (props: any) => <Link getProps={isActive} {...props} />

const Navbar = ({ siteTitle }: any) => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          {siteTitle}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main-navbar"
          aria-controls="main-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="main-navbar">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <ExactNavLink to="/o-nas">O nas</ExactNavLink>
            </li>
            <li className="nav-item">
              <ExactNavLink to="/delavnice">Delavnice</ExactNavLink>
            </li>
            <li className="nav-item">
              <ExactNavLink to="/visokica">Visokica</ExactNavLink>
            </li>
            <li className="nav-item">
              <ExactNavLink to="/wiki">Wiki</ExactNavLink>
            </li>
            <li className="nav-item">
              <ExactNavLink to="/vesoljska-mreza">Vesoljska mreža</ExactNavLink>
            </li>
            <li className="nav-item">
              <ExactNavLink to="/oprema-in-varnost">Varnost</ExactNavLink>
            </li>
            <li className="nav-item">
              <ExactNavLink to="/kontakt">Kontakt</ExactNavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
