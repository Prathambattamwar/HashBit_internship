
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BookingForm.css'; 

const BookingForm = ({ movieId }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingId = Math.floor(Math.random() * 100000);
    navigate(`/confirmation/${bookingId}`, { state: { name, email, mobile } });
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <div>
        <label>Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div>
        <label>Mobile</label>
        <input type="tel" value={mobile} onChange={(e) => setMobile(e.target.value)} required />
      </div>
      <button type="submit">Book</button>
    </form>
  );
};

export default BookingForm;
