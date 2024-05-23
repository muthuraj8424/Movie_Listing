import React from "react";
import { Link } from "react-router-dom";
function MovieCard({ movie }) {
  return (
    <div className="movie-poster-container">
      <Link to={`/movie/${movie.imdbID}`}>
       
          <img
            src={movie.Poster}
            alt="movie-poster"
            width="230px"
            height="200px"
          /></Link>
          <p>Title:{movie.Title}</p>
          <p>Type: {movie.Type}</p>
          <p>Year:{movie.Year}</p>
          <p>IMDBID:{movie.imdbID}</p>
        
      
    </div>
  );
}

export default MovieCard;
