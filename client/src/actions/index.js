import axios from 'axios';

export const GET_VIDEOGAMES = "GET_VIDEOGAMES";
export const GET_GENRES = "GET_GENRES";
export const GET_VIDEOGAME_DETAIL = "GET_VIDEOGAME_DETAIL";
export const CREATE_VIDEOGAMES = "CREATE_VIDEOGAMES";
export const GET_NAME_VIDEOGAMES = "GET_NAME_VIDEOGAMES";
export const FILTER_BY_ORIGIN = "FILTER_BY_ORIGIN";
export const FILTER_BY_GENRES = "FILTER_BY_GENRES";
export const FILTER_BY_PALTFORMS = "FILTER_BY_PALTFORMS";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_BY_RATING = "ORDER_BY_RATING";
export const UPDATE_DETAIL = "UPDATE_DETAIL";

export function getVideoGames() {
  return async function(dispatch){
    try {
      const jsonVg = await axios('http://localhost:3001/videogames');
      return dispatch({
        type: GET_VIDEOGAMES,
        payload: jsonVg.data,
      })
    } catch (error) {
      console.log(error, 'Error GetVideoGames');
    }
  }
}

export function getDteailVg(id) {
  return async function(dispatch){
    try {
      const jsonVg = await axios(`http://localhost:3001/videogame/${id}`);
      return dispatch({
        type: GET_VIDEOGAME_DETAIL,
        payload: jsonVg.data,
      })
    } catch (error) {
      console.log(error, 'Error GetVideoGameDetail');
    }
  }
}

export function getGenres() {
  return async function(dispatch){
    try {
      const jsonVg = await axios('http://localhost:3001/genres');
      return dispatch({
        type: GET_GENRES,
        payload: jsonVg.data,
      })
    } catch (error) {
      console.log(error);
    }
  }
}
// ALERT
export function postVideogame(payload) {
  return async function() {
    try {
      const postVg = await axios.post("http://localhost:3001/videogame", payload);
      console.log(postVg);
      alert(`${postVg.data.message}`);
      return {
        type: CREATE_VIDEOGAMES,
        payload,
      }
    } catch (error) {
      console.log(error.response.data.message);
      alert(`${error.response.data.message}`);
    }
  }
}

export function filterVgByOrigin(payload){
  return {
    type: FILTER_BY_ORIGIN,
    payload,
  }
}

export function filterVgByGenres(payload){
  return {
    type: FILTER_BY_GENRES,
    payload,
  }
}

export function filterVgByPlatforms(payload){
  return {
    type: FILTER_BY_PALTFORMS,
    payload,
  }
}

export function orderByName(payload) {
  return {
    type: ORDER_BY_NAME,
    payload
  }
}

export function orderByRating(payload) {
  return {
    type: ORDER_BY_RATING,
    payload
  }
}

export function getNameVg(name) {
  return async function (dispatch) {
    try {
      const jsonVg = await axios(`http://localhost:3001/videogames?name=${name}`);
      return dispatch({
        type: GET_NAME_VIDEOGAMES,
        payload: jsonVg.data,
      })
    } catch (error) {
      console.log(error.response.data.message);
      alert(`${error.response.data.message}`);
    }
  }
}

export function updateVgDetail() {
  return {
    type: UPDATE_DETAIL,
  }
}
