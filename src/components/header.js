import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import PropTypes from "prop-types"

import Logo from '../assets/images/header-logo.svg';

const Header = ({ siteTitle }) => (
  <header>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">
        <img
          src={Logo}
          className="d-inline-block align-top"
          alt="React Bootstrap logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#service">Service</Nav.Link>
          <Nav.Link href="#clients">Clients</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
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
