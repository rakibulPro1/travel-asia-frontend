import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import "./ManageSingleBook.css";

const ManageSingleBook = (props) => {
  const { name, img, price, description } = props.bookedTours;
  return (
    <Container>
      <Row xs={1} className="booking-area">
        <Col>
          <table className="table table-striped table-hover table-responsive table-bordered">
            <tbody>
              <tr>
                <td className="px-3">
                  <Image
                    src={img}
                    width="100px"
                    className="border-0 rounded-3"
                  ></Image>
                </td>
                <td className="px-3">{name}</td>
                <td className="px-3">{description.slice(1, 100)}</td>
                <td className="px-3">
                  <h5 className="fw-bold">${price}</h5>
                </td>
                <td className="px-3">
                  <button
                    onClick={() => props.handleDeleteBooking(props.bookingId)}
                    className="badge bg-danger border-0"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </Col>
      </Row>
    </Container>
  );
};

export default ManageSingleBook;
