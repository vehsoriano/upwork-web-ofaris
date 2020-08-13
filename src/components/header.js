import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import PropTypes from "prop-types"

import Logo from '../assets/images/header-logo.svg';

const Header = ({ siteTitle }) => (
  <header className="header">
    <Navbar className="navbar" expand="lg">
      <Navbar.Brand href="#home">
        <img
          src={Logo}
          className="d-inline-block align-top"
          alt="Ofaris logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home" className="navbar-link">Home</Nav.Link>
          <Nav.Link href="#service" className="navbar-link">Service</Nav.Link>
          <Nav.Link href="#clients" className="navbar-link">Clients</Nav.Link>
          <Nav.Link href="#contact" className="navbar-link">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
