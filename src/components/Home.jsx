import React, { useEffect, useState } from "react";
import MovieDetail from "./MovieDetail";
import { useDispatch } from "react-redux";
import Header from "./Header";
import {fetchAsyncMovies,fetchAsyncMoviesorSeries,fetchAsyncSeries } from "./features/Slice";
function Home() {
 const dispatch = useDispatch();
 const movieText = "spider"
 const searchText = "harry"
  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText))
    dispatch(fetchAsyncSeries(searchText))
    // dispatch(fetchAsyncMoviesorSeries())
  }, [dispatch]);

  return (
    <div>
      <MovieDetail />
    </div>
  );
}

export default Home;
