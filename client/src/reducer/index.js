import {
  GET_VIDEOGAMES,
  FILTER_BY_ORIGIN,
  FILTER_BY_GENRES,
  FILTER_BY_PALTFORMS,
  ORDER_BY_NAME,
  ORDER_BY_RATING,
  GET_NAME_VIDEOGAMES,
  GET_GENRES,
  CREATE_VIDEOGAMES,
  GET_VIDEOGAME_DETAIL,
  UPDATE_DETAIL } from "../actions";

const initialState = {
  videogames: [],
  allVideogames: [],
  genres: [],
  detail: [],
}

export default function rootReducer (state = initialState, action) {
  switch (action.type) {
    case GET_VIDEOGAMES:
      return{
        ...state,
        videogames: action.payload,
        allVideogames: action.payload,
      }

    case GET_VIDEOGAME_DETAIL:
    return{
      ...state,
      detail: action.payload,
    }

    case GET_GENRES:
      return{
        ...state,
        genres: action.payload,
      }

    case CREATE_VIDEOGAMES:
      return{
        ...state,
      }

    case GET_NAME_VIDEOGAMES:
      return{
        ...state,
        videogames: action.payload,
      }

    case FILTER_BY_ORIGIN:
      const apiVideoGames = state.videogames.filter(
        vg => typeof vg.id === "number"
      );
      const dbVideoGames = state.videogames.filter(
        vg => typeof vg.id === "string"
      );
      return {
        ...state,
        videogames:
          action.payload === "All" || action.payload === ""
            ? state.allVideogames
            : action.payload === "Api"
            ? apiVideoGames
            : dbVideoGames,
      };

    case FILTER_BY_GENRES:
      const vgFilterGenre = state.videogames.filter(vg => vg.genres.includes(action.payload));
      return {
        ...state,
        videogames: action.payload === "" ? state.allVideogames : vgFilterGenre
      };

      case FILTER_BY_PALTFORMS:
      const vgFilterPlatform = state.videogames.filter(vg => vg.platforms.includes(action.payload));
      return {
        ...state,
        videogames: action.payload === "" ? state.allVideogames : vgFilterPlatform
      };

    case ORDER_BY_NAME:
      const videogames = [...state.videogames];
      const ordenedArray = action.payload === 'Upward'?
          videogames.sort(function (a, b) {
            if (a.name > b.name) {
              return 1;
            }
            if (b.name > a.name) {
              return -1;
            }
            return 0;
          }) :
          videogames.sort(function (a, b) {
            if (a.name > b.name) {
              return -1;
            }
            if (b.name > a.name) {
              return 1;
            }
            return 0;
          })
      return {
        ...state,
        videogames: action.payload === 'None'? state.allVideogames : ordenedArray,
      }

    case ORDER_BY_RATING:
      const videogamesRating = [...state.videogames];
      const ordenedArrayByRating = action.payload === 'Upward'?
          videogamesRating.sort(function (a, b) {
            return a.rating - b.rating;
          }) :
          videogamesRating.sort(function (a, b) {
            return b.rating - a.rating;
          })
          console.log(ordenedArrayByRating);
      return {
        ...state,
        videogames: action.payload === 'None'? state.allVideogames : ordenedArrayByRating,
      }

    case UPDATE_DETAIL:
      return {
        ...state,
        detail: [],
      }

    default:
      return state;
  }
}
