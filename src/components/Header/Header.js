import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      {/* navbar  */}
      <Navbar bg="light" expand="lg" style={{ lineHeight: "50px" }}>
        <Container>
          <div className="logo">TravelAsia</div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink to="/" className="menu-link">
                Home
              </NavLink>
              <NavLink to="/tourses" className="menu-link">
                Tours
              </NavLink>
              <NavLink to="/about" className="menu-link">
                About Us
              </NavLink>
              <NavLink to="/contact" className="menu-link">
                Contact
              </NavLink>
              <NavLink
                to="/contact"
                className="manu-link"
                style={{
                  color: "#ff0143",
                  marginTop: "2px",
                  marginLeft: "20px",
                }}
              >
                Login
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
