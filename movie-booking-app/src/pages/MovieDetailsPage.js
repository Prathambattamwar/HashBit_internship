
import React from 'react';
import MovieDetails from '../components/MovieDetails';
import { useParams } from 'react-router-dom';

const MovieDetailsPage = () => {
  const { id } = useParams();

  return (
    <div>
      <MovieDetails />
     
    </div>
  );
};

export default MovieDetailsPage;
