import React from "react";
import { Carousel } from "react-bootstrap";

const Banner = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100 h-75"
            src="https://i.ibb.co/rHnVWSJ/banner-5.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/BVY5ZPh/banner-4.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/xqkT8Kj/banner-2.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
