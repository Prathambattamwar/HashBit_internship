
import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import './BookingConfirmation.css';

const BookingConfirmation = () => {
  const { bookingId } = useParams();
  const location = useLocation();
  const { name, email, mobile } = location.state;

  return (
    <div className="booking-confirmation">
      <h1>Booking Confirmation</h1>
      <p>Booking ID: {bookingId}</p>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Mobile: {mobile}</p>
    </div>
  );
};

export default BookingConfirmation;
