require('dotenv').config();
const { Router } = require('express');
const { getVgId } = require('../functions/getvideogames');

const router = Router();

router.get('/:id', async(req, res) => {
  const {id} = req.params;
  try {
    const vg = await getVgId(id);
    // console.log('vg', vg);
    if (vg) {
      res.status(200).json(vg);
    }
  } catch (error) {
    res.status(400).json({err: error.message});
  }
});

module.exports = router;
