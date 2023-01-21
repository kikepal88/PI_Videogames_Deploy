require('dotenv').config();
const axios = require('axios');
const { Videogame, Genre } = require('../../db');

const { API_KEY } = process.env;

const apiUrl = "https://api.rawg.io/api/"

const getGenreApiInfo = async() => {
  let getGenreApiData = await axios.get(`${apiUrl}genres?key=${API_KEY}`);
  let genreApiData = getGenreApiData.data.results;
  let arrayGenresName = genreApiData.map(g => g.name);
  console.log(arrayGenresName.length);
  return arrayGenresName;
}

getGenreApiInfo();

module.exports = getGenreApiInfo;
