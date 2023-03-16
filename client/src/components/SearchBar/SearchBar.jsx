import React from "react";
// import { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameVg } from "../../actions";

export default function SearchBar({ name, setName, setCurrentPage }) {
  const dispatch = useDispatch();

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getNameVg(name))
    setCurrentPage(1);
  }

  return(
    <section id="searchbar" className="searchbar">
      <input
        value={name}
        type="text"
        placeholder="Find..."
        onChange={e => handleInputChange(e)}
      />
      <button type='submit' onClick={e => handleSubmit(e)}>Find</button>
    </section>
  )
}
