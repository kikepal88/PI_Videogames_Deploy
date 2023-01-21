require('dotenv').config();
const { Router } = require('express');
const { Videogame, Genre } = require('../../db');

const router = Router();

router.post('/', async(req, res) => {
  let {
    id,
    name,
    bgi_url,
    description,
    release_date,
    rating,
    platforms,
    genres,
    created,
  } = req.body;

  if (!name || !bgi_url || !description || !platforms.length || !genres.length) {
    return res
      .status(400)
      .json({message: "Complete all required fields"});
  }
  if (rating < 0.0 || rating > 5.0) {
    return res.status(400).json({ message: "Invalid number" });
  }

  try {
    let vgCreated = await Videogame.create({
      id,
      name,
      bgi_url,
      description,
      release_date,
      rating,
      platforms,
      created,
    })
    genres.forEach(async g => {
      let genreDb = await Genre.findOne({
        where: {name: g}
      })
      // console.log(genreDb);
      vgCreated.addGenre(genreDb);
    })
    res.json({message:'Videogame was created successfully'});
  } catch (error) {
    res.status(404).json({error, message:'Videogame was not created'})
  }

})

module.exports = router;
