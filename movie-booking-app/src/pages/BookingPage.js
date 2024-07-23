
import React from 'react';
import BookingForm from '../components/BookingForm';
import { useParams } from 'react-router-dom';

const BookingPage = () => {
  const { id } = useParams();

  return (
    <div>
      <BookingForm movieId={id} />
    </div>
  );
};

export default BookingPage;
