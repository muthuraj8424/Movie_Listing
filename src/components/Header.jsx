import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies } from "./features/Slice";

function Header({ onSearch }) {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch()
  function handleChange(e) {
    setTerm(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(term);
    dispatch(fetchAsyncMovies(term))
    setTerm(""); 
  }

  return (
    <>
    <div className="container">

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={term}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
    </div></>
  );
}

export default Header;
