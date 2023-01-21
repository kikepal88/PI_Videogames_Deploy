require('dotenv').config();
const { Router } = require('express');
const { getAllVg } = require('../functions/getvideogames');

const router = Router();

router.get('/', async(req, res) => {
  const name = req.query.name;
  let vgTotal = await getAllVg();
  if (name) {
    let arrayIncludeName = await vgTotal.filter(vg => vg.name.toLowerCase().includes(name.toLowerCase())).slice(0, 15);
    if (arrayIncludeName.length) {
      res.status(200).json(arrayIncludeName)
    } else {
      res.status(404).json({message:`There is no match with ${name} in the database`})
    }
  } else {
    try {
      res.status(200).json(vgTotal)
    } catch (error) {
    res.status(400).json(error)
    }
  }
});

module.exports = router;
