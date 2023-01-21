require('dotenv').config();
const axios = require('axios');
const { Videogame, Genre } = require('../../db');

const { API_KEY } = process.env;

const apiUrl = "https://api.rawg.io/api/"

//FUNCIONES PARA OBTENER VIDEOJUEGOS DE LA API Y LA DB

// getVgApiInfo obtiene los primeros 100 videojuegos de la API
// y los convierte a objetos con solo las propiedades necesarias
// los retorna dentro del array newArrayVg
const getVgApiInfo = async() => {
  let getApiData = await axios.get(`${apiUrl}games?key=${API_KEY}`);
  let apiData = getApiData.data.results;
  for (let i = 2; i <= 5; i++) {
    let getApiDataTo100 = await axios.get(`${apiUrl}games?key=${API_KEY}&page=${i}`);
    let apiDataTo100 = getApiDataTo100.data.results;
    apiData = apiData.concat(apiDataTo100);
  }

  const newArrayVg = apiData.map(vg => {
    return {
      id: vg.id,
      name: vg.name,
      bgi_url: vg.background_image,
      rating: vg.rating,
      platforms: vg.platforms.map(p => p.platform.name),
      genres: vg.genres.map(g => g.name),
    }
  });

  return newArrayVg;
}

// getVgDb obtiene los videojuegos creados en la DB y que incluya el genero del videojuego
const getVgDb = async() => {
  const vgDb = await Videogame.findAll({
    include:{
      model: Genre,
      attributes: ['name'],
      through: {
        attributes: [],
      }
    }
  });

  return vgDb.map(vg => ({
    id: vg.id,
    name: vg.name,
    bgi_url: vg.bgi_url,
    description: vg.description,
    released: vg.released,
    rating: vg.rating,
    platforms: vg.platforms,
    genres: vg.genres.map(g => g.dataValues.name)
  }));
}

// getAllVg invoca a las funciones getVgDb y getVgApiInfo para obtener todos
// los videojuegos y concatenarlos en un unico array allVg
// Se exporta esta funcion para usarla en los middlewares
const getAllVg = async() => {
  const apiInfo = await getVgApiInfo();
  const vgDb = await getVgDb();
  const allVg = apiInfo.concat(vgDb);

  return allVg;
}

const getVgId = async (id) => {
  if (id.length <= 6) {
    let vg = await axios.get(`${apiUrl}games/${id}?key=${API_KEY}`);
    let vgData = vg.data;
    let vgApiData = {
      id: vgData.id,
      name: vgData.name,
      released: vgData.released,
      description: vgData.description_raw,
      bgi_url: vgData.background_image,
      rating: vgData.rating,
      platforms: vgData.platforms.map(p => p.platform.name),
      genres: vgData.genres.map(g => g.name),
    };
    return vgApiData;
  } else {
    const allVgDb = await getVgDb();
    const vgDbById = allVgDb.find(vg => vg.id === id);
    if (vgDbById) {
      return vgDbById;
    } else {
      throw Error("Videogame not found");
    }
  }
}

module.exports = { getAllVg, getVgId};
