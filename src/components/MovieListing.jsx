import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncMoviesorSeries,
  getallMovieorShow,
  removeSelectedMovieorShow,
} from "./features/Slice";

function MovieListing() {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const movieOrShow = useSelector(getallMovieorShow);

  useEffect(() => {
    dispatch(fetchAsyncMoviesorSeries(imdbID));
    // to clean the function
    return () => {
      dispatch(removeSelectedMovieorShow());
    };
  }, [dispatch, imdbID]);
  const {
    Awards,
    BoxOffice,
    Country,
    DVD,
    Director,
    Genre,
    Language,
    Metascore,
    Plot,
    Poster,
    Production,
    Rated,
  } = movieOrShow;

  return (
    <>
      {Object.keys(movieOrShow).length === 0 ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <div className="listing-container">
            <h1>{movieOrShow.Title}</h1>
            <div className="divider">
            <img src={Poster} alt={movieOrShow.Title} className="image" />
            <p><b>Plot-{Plot}</b></p>
            </div>
            <p>
              <strong>Director:</strong> {Director}
            </p>
            <p>
              <strong>Genre:</strong> {Genre}
            </p>
            <p>
              <strong>Language:</strong> {Language}
            </p>
            <p>
              <strong>Country:</strong> {Country}
            </p>
            <p>
              <strong>Rated:</strong> {Rated}
            </p>
            <p>
              <strong>Awards:</strong> {Awards}
            </p>
            <p>
              <strong>Box Office:</strong> {BoxOffice}
            </p>
            <p>
              <strong>Metascore:</strong> {Metascore}
            </p>
            <p>
              <strong>Production:</strong> {Production}
            </p>
            <p>
              <strong>DVD Release:</strong> {DVD}
            </p>
          </div>
        </>
      )}
    </>
  );
}

export default MovieListing;
