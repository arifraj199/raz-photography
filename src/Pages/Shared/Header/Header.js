import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);

  const handleSignout = () => {
    signOut(auth);
  };
  return (
        <Navbar sticky="top" className="" collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to="/">
              <span className="fw-bold fs-3"><span className="text-success">RAZ</span> Photography</span>
              </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto fw-bold">
                <Nav.Link href="home#services">Services</Nav.Link>
                <Nav.Link as={Link} to="/blog">
                  Blog
                </Nav.Link>
                <Nav.Link as={Link} to="/about">
                  About
                </Nav.Link>
                {user
                  ? <button className="btn btn-link text-decoration-none text-light navbar-nav" onClick={handleSignout}>Sign Out</button>
                  : <Nav.Link as={Link} to="/login">
                      Login
                    </Nav.Link>}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
  );
};

export default Header;
