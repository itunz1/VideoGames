const { Router } = require('express');
const {Genero} = require ('../db')
const {getGenero} = require ('../controllers/generoController');

const router = Router();

router.get("/", async (req, res) => {
    let generos = await getGenero();
    res.status(200).send(generos);
    console.log('genero', types)
  });

module.exports = router;