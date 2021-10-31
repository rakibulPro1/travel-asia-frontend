import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import "./Booking.css";

const Booking = (props) => {
  const { name, img, price, description } = props.bookedTours;
  return (
    <Container>
      <Row xs={1} md={2} className="booking-area">
        <Col className="mt-4">
          <h3>{name}</h3>
          <p>{description}</p>
          <div className="d-flex justify-content-between me-5">
            <h5>
              <span className="fw-bold" style={{ color: "#ff0143" }}>
                ${price}
              </span>
              /Per day
            </h5>
            <button
              onClick={() => props.handleDeleteBooking(props.bookingId)}
              className="custom-btn"
            >
              Delete Tour
            </button>
          </div>
        </Col>
        <Col className="mt-4 mb-3 text-center">
          <Image
            src={img}
            width="250px"
            className="border-0 rounded-2"
            rounded
            fluid
          ></Image>
        </Col>
      </Row>
      <hr />
    </Container>
  );
};

export default Booking;
