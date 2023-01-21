require('dotenv').config();
const { Router } = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const videogames = require('./middlewares/getvg');
const genres = require('./middlewares/getGn');
const videogame = require('./middlewares/postVg');
const videogameId = require('./middlewares/getVgId');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/videogames', videogames);
router.use('/genres', genres);
router.use('/videogame', videogame);
router.use('/videogame', videogameId);


module.exports = router;
