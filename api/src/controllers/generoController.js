const axios = require('axios') 
const { Genero } = require('../db')

const getGenero = async () => {
  try {
    const infoGeneros = await axios.get('https://api.rawg.io/api/genres?key=cdb7f82b2f484adea80e4ca087b51cd2')
    const generos = infoGeneros.data.results

    generos.forEach((e) => {
      Genero.findOrCreate({
        where: {
          name: e.name,
        },
      })
    })

    const allGeneros = await Genero.findAll()

    return allGeneros
  } catch (error) {
    return 'Error al buscar Genero'
  }
}

module.exports = {
  getGenero,
}