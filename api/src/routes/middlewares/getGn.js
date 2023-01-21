require('dotenv').config();
const { Router } = require('express');
const getGenreApiInfo = require('../functions/getGenres');
const { Genre } = require('../../db');

const router = Router();

router.get('/', async(req, res) => {
  const apiGenres = await getGenreApiInfo();
  // console.log(apiGenres);
  apiGenres.forEach(g => {
    Genre.findOrCreate({
      where: {
        name: g,
      },
    });
  });
  const allGenres = await Genre.findAll();
  // console.log(allGenres.map(g => g.dataValues));
  res.json(allGenres.map(g => g.dataValues));
})

module.exports = router;
