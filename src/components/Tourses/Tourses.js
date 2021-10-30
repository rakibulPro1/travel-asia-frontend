import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Tours from "../Tours/Tours";

const Tourses = () => {
  const [tourses, setTourses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/tourses")
      .then((res) => res.json())
      .then((data) => setTourses(data));
  }, []);
  return (
    <div>
      <div className="tourses-header text-center mx-auto mt-5 mb-5">
        <h2 className="fs-2 fw-bold">Our Speciall Tours</h2>
        <p>
          TravelAsia is the site for tours, travels, trips, adventures and a
          wide range of other tour agencies.
        </p>
      </div>
      <Row xs={1} md={3} className="g-4 px-4">
        {tourses.map((tours) => (
          <Tours tours={tours}></Tours>
        ))}
      </Row>
    </div>
  );
};

export default Tourses;
