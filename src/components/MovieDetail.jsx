import React from "react";
import { useSelector } from "react-redux";
import { getallmovies, getallseries } from "./features/Slice";
import MovieCard from "./MovieCard";
// import Slider from "react-slick";
import Header from "./Header";
function MovieDetail() {
  const movies = useSelector(getallmovies);
  const series = useSelector(getallseries);
  console.log(movies);
  console.log(series);
  let rendermovies,
    renderseries = "";
  rendermovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => {
        return <MovieCard key={index} movie={movie} />;
      })
    ) : (
      <div>{movies.error}</div>
    );
  renderseries =
    series.Response === "True" ? (
      series.Search.map((movie, index) => {
        return <MovieCard key={index} movie={movie} />;
      })
    ) : (
      <div>{movies.error}</div>
    );

  return (
    <div>
      <div>
        <Header />
      </div>
      <div><h1>Movies</h1></div>
      <div className="movie-render-container">{rendermovies}</div>

      <div>
        <h1>Shows</h1>
      </div>
      <div className="movie-render-container">{renderseries}</div>
    </div>
  );
}

export default MovieDetail;
