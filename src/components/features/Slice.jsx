import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { MovieAPI } from "../MovieApi";
import { ApiKey } from "../ApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (searchQuery) => {
    try {
      // let searchQuery = "harry";
      const response = await MovieAPI.get(
        `?apikey=${ApiKey}&s=${searchQuery}&type=movie`
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);
export const fetchAsyncSeries = createAsyncThunk(
  "movies/fetchAsyncSeries",
  async (searchQuery) => {
    try {
      // let searchQuery = "spider";
      const response = await MovieAPI.get(
        `?apikey=${ApiKey}&s=${searchQuery}&type=movie`
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);
export const fetchAsyncMoviesorSeries = createAsyncThunk(
  "movies/fetchAsyncMoviesorSeries",
  async (id) => {
    try {
      const response = await MovieAPI.get(
        `?apikey=${ApiKey}&i=${id}&Plot=full`
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(
        "An error occurred while fetching movies or series:",
        error
      );
      throw error;
    }
  }
);

const initialState = {
  movies: {},
  shows: {},
  MovieorShow: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, action) => {
      state.movies = action.payload;
    },
    removeSelectedMovieorShow: (state) => {
      state.MovieorShow = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncMovies.pending, (state, action) => {
        console.log("pending");
      })
      .addCase(fetchAsyncMovies.fulfilled, (state, { payload }) => {
        console.log("fulfilled");
        state.movies = payload;
      })
      .addCase(fetchAsyncMovies.rejected, (state, { payload }) => {
        console.log("rejected");
      })
      .addCase(fetchAsyncSeries.fulfilled, (state, { payload }) => {
        console.log("fulfilled");
        state.shows = payload;
      })
      .addCase(fetchAsyncMoviesorSeries.fulfilled, (state, { payload }) => {
        console.log("Movie or Series fulfilled");
        state.MovieorShow = payload;
      });
  },
});

export const { addMovies, removeSelectedMovieorShow } = movieSlice.actions;
export const getallmovies = (state) => state.moviesList.movies;
export const getallseries = (state) => state.moviesList.shows;
export const getallMovieorShow = (state) => state.moviesList.MovieorShow;
export default movieSlice.reducer;
