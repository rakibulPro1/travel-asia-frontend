import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import contactImg from "../../images/contact/contact.png";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <div className="searvice-header text-center mx-auto mt-5 mb-4 w-50">
        <h2 className="fs-2 fw-bold ">Contact Us</h2>
      </div>
      <Row xs={1} md={2} className="g-4 px-4 my-5">
        <Col>
          <img width="100%" src={contactImg} alt="" />
        </Col>
        <Col>
          <div className="w-75 mx-auto">
            <div className="mb-3">
              <label className=" fw-bold mb-2">Name:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your Name"
              />
            </div>
            <div className=" mb-3">
              <label className=" fw-bold mb-2">Email:</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter your Email"
              />
            </div>
            <div className=" mb-3">
              <label className=" fw-bold mb-2">Message:</label>
              <textarea
                className="form-control"
                placeholder="Enter Your Message"
                cols="10"
                rows="5"
              ></textarea>
            </div>
            <Link to="/">
              <button className="contact-btn">Submit</button>
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
