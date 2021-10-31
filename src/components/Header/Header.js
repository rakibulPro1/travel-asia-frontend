import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useFirebase from "../../hooks/useFirebase";
import "./Header.css";

const Header = () => {
  const { user, handleSignInWithGoogle, logOut } = useFirebase();

  return (
    <div>
      {/* navbar  */}
      <Navbar bg="light" expand="lg">
        <Container>
          <div className="logo">TravelAsia</div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex align-items-center">
              <NavLink to="/" className="menu-link">
                Home
              </NavLink>
              <NavLink to="/tourses" className="menu-link">
                Tours
              </NavLink>
              <NavLink to="/my-bookings" className="menu-link">
                My Bookings
              </NavLink>
              <NavLink to="/about" className="menu-link">
                About Us
              </NavLink>
              <NavLink to="/contact" className="menu-link">
                Contact
              </NavLink>

              {/* dropdown */}
              <NavDropdown
                title={user.email ? user.displayName : "Dashboard"}
                className="menu-link"
                id="basic-nav-dropdown"
              >
                <div className="text-center py-3 profile ">
                  <img src={user?.photoURL} alt="" />
                  <small>{user.email}</small>
                </div>
                <NavDropdown.Item href="#action/3.1">
                  <NavLink to="/add-tours" className="menu-link">
                    Add Tours
                  </NavLink>
                </NavDropdown.Item>

                <NavDropdown.Item href="#action/3.3">
                  <NavLink to="/manage-bookings" className="menu-link">
                    Manage Bookings
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
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
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
