import React from "react";
import { Col, Row } from "react-bootstrap";
import "./About.css";

const About = () => {
  return (
    <div className="px-5 py-5 mt-5">
      <Row xs={1} md={2} className="gx-5">
        <Col>
          <div>
            <img src="https://i.ibb.co/LhW6L8B/img-4.jpg" alt="" width="100%" />
          </div>
        </Col>
        <Col>
          <div>
            <h5 className="text-warning fw-bold">BEST TOUR SERVICES</h5>
            <h1 className="mb-3 about-title">
              Trusted & Award Winning Tour Agency
            </h1>
            <p className="fs-5 about-para mb-4">
              There are many variations of lorem ipsum but the majority have
              alteration in some form, by randomised words look.
            </p>
            <div>
              <p>
                <span>
                  <i className="fas fa-angle-double-right about-icon"></i>
                </span>
                <span className="about-rules">
                  Every employee wears a photo ID badge.
                </span>
              </p>
              <p>
                <span>
                  <i className="fas fa-angle-double-right about-icon"></i>
                </span>
                <span className="about-rules">
                  Mobiles are custom wrapped for easy identification.
                </span>
              </p>
              <p>
                <span>
                  <i className="fas fa-angle-double-right about-icon"></i>
                </span>
                <span className="about-rules">
                  We are a fully insured nationally ranked brand.
                </span>
              </p>
              <p>
                <span>
                  <i className="fas fa-angle-double-right about-icon"></i>
                </span>
                <span className="about-rules">
                  All work is backed by our exclusive “Streak-Free Guarantee”.
                </span>
              </p>
              <p>
                <span>
                  <i className="fas fa-angle-double-right about-icon"></i>
                </span>
                <span className="about-rules">
                  Our services are more affordable than you think.
                </span>
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default About;
