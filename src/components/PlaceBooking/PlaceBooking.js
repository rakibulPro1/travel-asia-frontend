import React, { useEffect, useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./PlaceBooking.css";
import useFirebase from "../../hooks/useFirebase";

const PlaceBooking = () => {
  const { register, handleSubmit, reset } = useForm();
  const { id } = useParams();
  const [tours, setTours] = useState({});
  const { name, img, price, description } = tours;
  const { user } = useFirebase();

  useEffect(() => {
    fetch(`https://cryptic-sea-16801.herokuapp.com/tourses/${id}`)
      .then((res) => res.json())
      .then((data) => setTours(data));
  }, []);

  const onSubmit = (data) => {
    data.bookedTours = tours;
    axios
      .post("https://cryptic-sea-16801.herokuapp.com/bookings", data)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Welcome to happy journey. You are booked now successfully");
          reset();
        }
      });
  };
  return (
    <Container className="my-5">
      <Row md={2} xs={1} className="gx-5">
        <Col>
          <h3 className="mb-3">{name}</h3>
          <p style={{ fontSize: "17px" }}>{description}</p>
          <h4>
            <span style={{ color: "#ff0143" }}>${price}</span>
            <span>/Per Person</span>
          </h4>
        </Col>
        <Col>
          <Image src={img} rounded fluid></Image>
        </Col>
      </Row>
      <Col className="col-md-6 mx-auto">
        <h3 className="mt-5 mb-4 text-center">Please Book Now</h3>
        <form className="booking-form" onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("name")}
            value={user.displayName}
            className="form-control mt-3"
          />
          <input
            {...register("email")}
            value={user.email}
            className="form-control mt-3"
          />
          <input
            {...register("adress")}
            required
            placeholder="Adress"
            className="form-control mt-3"
          />
          <input
            {...register("phone")}
            required
            type="number"
            placeholder="Phone"
            className="form-control mt-3"
          />

          <input type="submit" className="form-control submit-btn mt-3" />
        </form>
      </Col>
    </Container>
  );
};

export default PlaceBooking;
