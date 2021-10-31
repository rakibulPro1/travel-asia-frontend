import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Tours from "../Tours/Tours";
import ScaleLoader from "react-spinners/ScaleLoader";

const Tourses = () => {
  let [loading, setLoading] = useState(false);
  const [tourses, setTourses] = useState([]);
  useEffect(() => {
    setLoading(true);
    fetch("https://cryptic-sea-16801.herokuapp.com/tourses")
      .then((res) => res.json())
      .then((data) => {
        setTourses(data);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      {loading ? (
        <div
          style={{ height: "100vh" }}
          className="d-flex align-items-center justify-content-center"
        >
          <ScaleLoader color={"dodgerblue"} loading={loading} size={30} />
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default Tourses;
