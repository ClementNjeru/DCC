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
            <Nav.Link href="#pricing">Ministries</Nav.Link>
            <Nav.Link href="#pricing">Prayer</Nav.Link>
            <Nav.Link href="#pricing">Donate</Nav.Link>
            <NavDropdown title="More" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Blogs</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Media
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Calender</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className='navL'>
            <Nav.Link href="#deets">Media</Nav.Link>
            <Nav.Link href="#memes">
            Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;