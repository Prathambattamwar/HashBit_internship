
import React from 'react';
import { Link } from 'react-router-dom';
import movies from '../Data.js';
import './MovieList.css'; 

const MovieList = () => {
  return (
    <div className="movie-list">
      {movies.map(movie => (
        <div key={movie.id} className="movie-item">
          <Link to={`/movie/${movie.id}`}>
            <img src={movie.image} alt={movie.title} />
            <h2>{movie.title}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
