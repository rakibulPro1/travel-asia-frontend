import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Booking from "../Booking/Booking";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetch("https://cryptic-sea-16801.herokuapp.com/bookings")
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, []);

  const handleDeleteBooking = (id) => {
    const proceedConfirm = window.confirm(
      "Are You Sure to delete this Tours ? "
    );
    if (proceedConfirm) {
      const url = `https://cryptic-sea-16801.herokuapp.com/booking/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.deletedCount === 1) {
            alert("Booking deleted successfully");
            const remaining = bookings.filter((booking) => booking._id !== id);
            setBookings(remaining);
          }
        });
    }
  };
  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4 text-info fw-bold">My Bookings</h2>
      {!bookings.length ? (
        <h4 className="text-center">No Tours Booked Yet..!</h4>
      ) : (
        <div>
          {bookings.map((booking) => (
            <Booking
              key={booking._id}
              bookingId={booking._id}
              bookedTours={booking.bookedTours}
              handleDeleteBooking={handleDeleteBooking}
            ></Booking>
          ))}
        </div>
      )}
    </Container>
  );
};

export default MyBookings;
