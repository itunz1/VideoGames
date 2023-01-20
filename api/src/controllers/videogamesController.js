const axios = require('axios')
const { Videogames, Genero } = require('../db')

const getVideogamesDb = async () => {
    try {
        const videogamesDb = await Videogames.findAll({
            include: {
                model: Genero,
                attributes: ['name'],
                through: {
                    attributer: [],
                },
            },
        })

        return videogamesDb
    } catch (error) {
        console.log(error)
    }
};


const getVideogamesByIdDb = async (id) => {
    try {
        let searchIdDb = await Videogames.findByPk(id, { include: { model: Genero } })

        let searchIdVideogamesDb = {
            id: searchIdDb.data.id,
            name: searchIdDb.data.name,
            description: searchIdDb.data.description,
            released: searchIdDb.data.released,
            rating: searchIdDb.data.rating,
            platforms: searchIdDb.data.platforms.map((e) => e.platform.name),
            image: searchIdDb.data.background_image,
        }

        return searchIdVideogamesDb

    } catch (error) {
        return 'Videogame no encontrado'
    }
}

const getVideogamesByIdApi = async (id) => {
    try {
        let searchIdApi = await axios.get(`https://api.rawg.io/api/games/${id}?key=cdb7f82b2f484adea80e4ca087b51cd2`)

        if (searchIdApi) {
            let searchIdVideogamesApi = {
                id: searchIdApi.data.id,
                name: searchIdApi.data.name,
                description: searchIdApi.data.description,
                released: searchIdApi.data.released,
                rating: searchIdApi.data.rating,
                platforms: searchIdApi.data.platforms.map((e) => e.platform.name),
                image: searchIdApi.data.background_image,
            }

            return searchIdVideogamesApi
        }
    } catch (error) {
        return 'Videogame no encontrado'
    }
}

const getVideogamesByNameDb = async (name) => {
    try{
      const videogamesDb2 = await getVideogamesDb()
      const videogamesDb2Filter = videogamesDb2.filter(
        (p) => p.name.toLowerCase() === name.toLowerCase(),
      )
      return videogamesDb2Filter
    }catch (error) {
      return 'Error de DB Videogame no encontrado'
    }
  }

const getVideogamesByNameApi = async (name) => {
    try {
        let nameApi = name.toLowerCase()
        const videogamesApi = await axios.get(
            `https://api.rawg.io/api/games/${nameApi}?key=cdb7f82b2f484adea80e4ca087b51cd2`)

        let nameSearchApi = {
            id: videogamesApi.data.id,
            name: videogamesApi.data.name,
            description: videogamesApi.data.description,
            released: videogamesApi.data.released,
            rating: videogamesApi.data.rating,
            platforms: videogamesApi.data.platforms.map((e) => e.platform.name),
            image: videogamesApi.data.background_image,
        }

        return nameSearchApi

    } catch (error) {
        return 'Videogame no encontrado'
    }
}

const getApiInfo = async () => {
    const apiUrl = await axios.get("https://api.rawg.io/api/games?key=cdb7f82b2f484adea80e4ca087b51cd2");
    const results = apiUrl.data.results

    const videogamesInfo = []

    results.map(e => {
        videogamesInfo.push({
            id: e.id,
            name: e.name,
            released: e.released,
            rating: e.rating,
            platforms: e.platforms.map((e) => e.platform.name),
            image: e.background_image,
        })
    });

    return videogamesInfo;
};

const getAllVideogames = async () => {
    const apiInfo = await getApiInfo();
    const dbInfo = await getVideogamesDb();
    const infoTotal = [...apiInfo, ...dbInfo];

    return infoTotal;
};

module.exports = {
    getVideogamesDb,
    getVideogamesByIdDb,
    getVideogamesByIdApi,
    getVideogamesByNameApi,
    getVideogamesByNameDb,
    getAllVideogames,
}