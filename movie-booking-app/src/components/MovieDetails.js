
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import movies from '../Data.js';
import './MovieDetails.css'; 

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const movie = movies.find(movie => movie.id === parseInt(id));
    setMovie(movie);
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div className="movie-details">
      <h1>{movie.title}</h1>
      <img src={movie.image} alt={movie.title} />
      <p>{movie.description}</p>
     <button id='bookBt'> <Link to={`/booking/${movie.id}`}>Book Now</Link></button>
    </div>
  );
};

export default MovieDetails;
