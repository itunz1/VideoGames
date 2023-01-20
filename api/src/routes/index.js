const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const generoRoute = require('./genero');         //importando las rutas
const videogamesRoute = require('./videogames');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/videogame", videogamesRoute);
router.use("/genero", generoRoute);

module.exports = router;
