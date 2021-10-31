import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Tours.css";

const Tours = (props) => {
  const { _id, img, name, description, price } = props.tours;

  return (
    <div className="my-3">
      <Col>
        <Card>
          <Card.Img variant="top" width="100%" src={img} />
          <Card.Body>
            <Card.Title className="tours-title fw-bold fs-4">{name}</Card.Title>
            <h5>
              <span className="price-amount fw-bold">${price}</span>
              <span> /Per Person</span>
            </h5>
            <Card.Text>{description.slice(0, 220)}</Card.Text>

            <Link
              className="btn btn-sm"
              style={{ backgroundColor: "#ff0143", color: "white" }}
              to={`/tours/${_id}`}
            >
              proceed to booking
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default Tours;
