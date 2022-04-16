import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <nav>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
                ENGROSSING PHOTOGRAPHY
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#features">Services</Nav.Link>
                <Nav.Link href="#pricing">Login</Nav.Link>
                <Nav.Link href="#pricing">About</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </nav>
    </div>
  );
};

export default Header;
