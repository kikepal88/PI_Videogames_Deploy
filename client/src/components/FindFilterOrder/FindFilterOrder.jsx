import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getVideoGames,
  filterVgByOrigin,
  orderByName,
  orderByRating,
  filterVgByGenres,
  filterVgByPlatforms } from '../../actions/index';
import SearchBar from "../SearchBar/SearchBar";

export default function FindFilterOrder({
  setCurrentPage,
  genres,
  platforms,
}) {
  const allVideoGames = useSelector((state) => state.videogames);
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  function showFilters() {
    const filterContainer = document.getElementById("filter_container");
    const filterButton = document.getElementById("submit_filter_button");
    const searchBar = document.getElementById("searchbar");
    filterContainer.classList.toggle("is-active");
    filterButton.classList.toggle("is-active");
    searchBar.classList.toggle("is-active");
  }

  function handleSort(e) {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    setCurrentPage(1);
  }

  function handleSortByRating(e) {
    e.preventDefault();
    dispatch(orderByRating(e.target.value));
    setCurrentPage(1);
  }

  function handleClickToReload(e){
    e.preventDefault();
    dispatch(getVideoGames());
    setName("");
    document.getElementById("selectName").value = "None";
    document.getElementById("selectRating").value = "None";
    document.getElementById("genreInput").value = "";
    document.getElementById("platformInput").value = "";
    document.getElementById("originInput").value = "";
  }

  const origins = ["", "All", "Api", "DataBase"]

  function handleFilterOrigin(e) {
    e.preventDefault();
    if (origins.includes(e.target.value)) {
      dispatch(filterVgByOrigin(e.target.value));
    }
    setCurrentPage(1);
    const genreValue = document.getElementById("genreInput").value;
    const platformValue = document.getElementById("platformInput").value;
    if (genreValue && platformValue) {
      dispatch(filterVgByGenres(genreValue));
      dispatch(filterVgByPlatforms(platformValue));
    } else if (genreValue) {
      dispatch(filterVgByGenres(genreValue));
    } else if (platformValue) {
      dispatch(filterVgByPlatforms(platformValue));
    }
    // console.log(document.getElementById("genreInput").value);
    // console.log(document.getElementById("platformInput").value);
  }

  function handleFilterGenres(e) {
    e.preventDefault();
    if (genres.includes(e.target.value) || e.target.value === "") {
      dispatch(filterVgByGenres(e.target.value));
    } else {
      dispatch(filterVgByGenres(""));
    }
    setCurrentPage(1);
    const originValue = document.getElementById("originInput").value;
    const platformValue = document.getElementById("platformInput").value;
    if (originValue && platformValue) {
      dispatch(filterVgByOrigin(originValue));
      dispatch(filterVgByPlatforms(platformValue));
    } else if (originValue) {
      dispatch(filterVgByOrigin(originValue));
    } else if (platformValue) {
      dispatch(filterVgByPlatforms(platformValue));
    }
    // console.log(document.getElementById("originInput").value);
    // console.log(document.getElementById("platformInput").value);
  }

  function handleFilterPlatforms(e) {
    e.preventDefault();
    if (platforms.includes(e.target.value) || e.target.value === "") {
      dispatch(filterVgByPlatforms(e.target.value));
    } else {
      dispatch(filterVgByPlatforms(""));
    }
    setCurrentPage(1);
    const originValue = document.getElementById("originInput").value;
    const genreValue = document.getElementById("genreInput").value;
    if (originValue && genreValue) {
      dispatch(filterVgByOrigin(originValue));
      dispatch(filterVgByGenres(genreValue));
    } else if (originValue) {
      dispatch(filterVgByOrigin(originValue));
    } else if (genreValue) {
      dispatch(filterVgByGenres(genreValue));
    }
    // console.log(document.getElementById("originInput").value);
    // console.log(document.getElementById("genreInput").value);
  }

  return (
    <section className="filter_section">
      <div className="filter_mobile" onClick={showFilters}>
        <h3>Filtros ⇅</h3>
      </div>
      <SearchBar
        name={name}
        setName={setName}
        setCurrentPage={setCurrentPage}
      />
      <section id="filter_container" className="filter_container">
        <h4>Order by Name</h4>
        <select id="selectName" name='orderings' onChange={handleSort}>
          <option value='None'>None</option>
          <option value='Upward'>Upward</option>
          <option value='Falling'>Falling</option>
        </select>

        <h4>Order by Rating</h4>
        <select id="selectRating" name='orderings' onChange={handleSortByRating}>
          <option value='None'>None</option>
          <option value='Upward'>Upward</option>
          <option value='Falling'>Falling</option>
        </select>

        <h4>Genres</h4>
        <input
          id="genreInput"
          list='genres'
          placeholder="Filter by Genre"
          onChange={e => handleFilterGenres(e)}
        />
          <datalist id='genres'>
            {
              genres && genres.map( g =>
                <option key={g} value={g} />
              )
            }
          </datalist>

        <h4>Platforms</h4>
        <input
          id="platformInput"
          list='platforms'
          placeholder="Filter by Platforms"
          onChange={e => handleFilterPlatforms(e)}
        />
          <datalist id='platforms'>
            {
              platforms && platforms.map( p =>
                <option key={p} value={p} />
              )
            }
          </datalist>

        <h4>Origin</h4>
        <input
          id="originInput"
          list='origin'
          placeholder="Filter by Origin"
          onChange={e => handleFilterOrigin(e)}
        />
          <datalist id='origin'>
            <option value="All" />
            <option value="Api" />
            <option value="DataBase" />
          </datalist>
      </section>
      <button id="submit_filter_button" className="submit_filter_button" onClick={e=> handleClickToReload(e)}>Reload All Videogames</button>
    </section>
  )
}
