import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";
import "./Header.css";

const Header = () => {
  const { user, handleSignInWithGoogle, logOut } = useFirebase();
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
              {user.email ? (
                <button
                  onClick={logOut}
                  className=" border-0 bg-transparent"
                  style={{
                    color: "#ff0143",
                    marginTop: "2px",
                    marginLeft: "20px",
                    fontSize: "18px",
                  }}
                >
                  Logout
                </button>
              ) : (
                <button
                  onClick={handleSignInWithGoogle}
                  className=" border-0 bg-transparent"
                  style={{
                    color: "#ff0143",
                    marginTop: "2px",
                    marginLeft: "20px",
                    fontSize: "18px",
                  }}
                >
                  Login
                </button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
