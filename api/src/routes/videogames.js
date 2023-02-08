const { Router } = require('express')
const {
    getVideogamesDb,
    getVideogamesByIdDb,
    getVideogamesByIdApi,
    getVideogamesByNameApi,
    getVideogamesByNameDb,
    getAllVideogames,
} = require('../controllers/videogamesController')

const { Videogames, Genero } = require('../db')
const router = Router()

       

router.get('/', async (req, res) => {
    const name = req.query.name
  
    if (!name) {
      const allVideogames = await getAllVideogames()
      res.send(allVideogames)
    } else {
      let videogamesDb = await getVideogamesByNameDb(name)
      let videogamesApi = await getVideogamesByNameApi(name)
  
      let videogamesByName
  
      if (videogamesDb && videogamesDb !== 'Videogame no encontrado') {
        videogamesByName = videogamesDb
      }
      if (videogamesApi && videogamesApi !== 'Videogame no encontrado') {
        videogamesByName = [videogamesApi]
      }
  
      if (videogamesByName.length > 0) {
        res.send(videogamesByName)
      } else {
        res.status(404).send('Videogame no encontrado')
      }
    }
  });

  router.get('/:id', async (req, res) => {

    try {
      const { id } = req.params
      if (id.length < 100000) {
        let searchIdApi = await getVideogamesByIdApi(id)
        res.status(200).send(searchIdApi)
      } else {
        let searchIdDb = await getVideogamesByIdDb(id)
        res.status(200).send(searchIdDb)
      }
    } catch (error) {
      res.status(404).send('Error')
    }
  })

  module.exports = router