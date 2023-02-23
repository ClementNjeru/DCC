import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="" variant="">
      <Container className='container1'>
        <Navbar.Brand href="#home"><img
              src="favicon.ico"
              width="100"
              height="100"
              radius="5"
              className="d-inline-block align-top"
              alt=" DCC logo"
            /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link  as={Link} to={"/"}>Home</Nav.Link>
            <Nav.Link as={Link} to={"/about"}>About Us</Nav.Link>
            <Nav.Link as={Link} to={"/ministries"}>Ministries</Nav.Link>
            <Nav.Link as={Link} to={"/prayer"}>Prayer</Nav.Link>
            <Nav.Link as={Link} to={"/giving"}>Donate</Nav.Link>
            <NavDropdown title="More" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to={"/blogs"}>Blogs</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/media"}>
                Media
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to={"/calender"}>Calender</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className='navL'>
            <Nav.Link as={Link} to={"/media"}>Media</Nav.Link>
            <Nav.Link as={Link} to={"/contact"}>
            Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;