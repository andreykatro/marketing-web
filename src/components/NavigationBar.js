import React, { Component }  from 'react';
import { Navbar, Nav } from "react-bootstrap";
import {Link} from "react-router-dom";

class NavigationBar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
        <Navbar.Brand href="/">[Marketing-Web]</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" activeKey="/#home">
            <Nav.Link eventKey="link-1" href="/#home">Home</Nav.Link>
            <Nav.Link eventKey="link-2" href="/#services">Services</Nav.Link>
            <Nav.Link eventKey="link-3" as={Link} to="/about">About</Nav.Link>
            <Nav.Link eventKey="link-4" href="/#team">Team</Nav.Link>
            <Nav.Link eventKey="link-5" as={Link} to="/projects">Projects</Nav.Link>
            <Nav.Link eventKey="link-6" as={Link} to="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default NavigationBar;
