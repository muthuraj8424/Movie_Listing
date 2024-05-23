import React from "react";
import "./App.css";
// import MovieDetail from './components/MovieDetail'
import Home from "./components/Home";
import MovieListing from "./components/MovieListing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/movie/:imdbID" Component={MovieListing} />
      </Routes>
    </Router>
  );
}

export default App;
