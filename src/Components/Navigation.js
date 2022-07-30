import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

const Navigation = () => {
  return (
    <Navbar bg="custom" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="https://media.graphcms.com/wV6ZmQbRQWqfJ3fftjy4"
            width="120"
            className="d-inline-block align-top"
            alt="img"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
