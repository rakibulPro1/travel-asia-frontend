import React from "react";
import { Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer px-4 py-3">
      <Row xs={1} md={3} lg={4} className="g-4">
        <Col>
          <div className="mt-4">
            <h4 className="footer-logo">TravelAsia</h4>
            <p className="footer-para mt-4">
              TravelAsia is the site for tours, travels, trips, adventures and a
              wide range of other tour agencies.
            </p>
            <small mt-4>rakibul1027@gmail.com</small>
            <br />
            <small>01851258931</small>
          </div>
        </Col>
        <Col>
          <div className="mt-4">
            <h4 className="mb-4">Company</h4>
            <ul>
              <li>
                <NavLink to="/" className="footer-link">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="footer-link">
                  Tours
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="footer-link">
                  AboutUs
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="footer-link">
                  Rewards
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="footer-link">
                  Work With US
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="footer-link">
                  Meet the team
                </NavLink>
              </li>
            </ul>
          </div>
        </Col>
        <Col>
          <div className="mt-4">
            <h4 className="mb-4">Links</h4>
            <ul>
              <li>
                <NavLink to="/" className="footer-link">
                  Destination
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="footer-link">
                  Tours
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="footer-link">
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="footer-link">
                  Gallery
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="footer-link">
                  FAQ'S
                </NavLink>
              </li>
            </ul>
          </div>
        </Col>
        <Col>
          <div className="mt-4 footer-insta">
            <h4 className="mb-4">Instagram</h4>
            <img
              src="https://i.ibb.co/wzJpHqC/img-1.jpg"
              width="30%"
              className="me-2 mt-2"
              alt=""
            />
            <img
              src="https://i.ibb.co/yFNSHBv/img-2.jpg"
              width="30%"
              className="me-2 mt-2"
              alt=""
            />
            <img
              src="https://i.ibb.co/Nn2sX41/img-3.jpg"
              width="30%"
              className="me-2 mt-2"
              alt=""
            />
            <img
              src="https://i.ibb.co/LhW6L8B/img-4.jpg"
              width="30%"
              className="me-2 mt-2"
              alt=""
            />
            <img
              src="https://i.ibb.co/MGTGc4S/img-5.jpg"
              width="30%"
              className="me-2 mt-2"
              alt=""
            />
            <img
              src="https://i.ibb.co/KGpJLVs/img-6.jpg"
              width="30%"
              className="me-2 mt-2"
              alt=""
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
