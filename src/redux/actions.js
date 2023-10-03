import axios from "axios";



export const getVideogames = () => {
    return async function (dispatch) {
        let videogames = await axios.get('https://api.rawg.io/api/games?key=cdb7f82b2f484adea80e4ca087b51cd2&page_size=48');

        return dispatch({
            type: 'GET_VIDEOGAMES',
            payload: videogames.data
        });
    };
};

export const searchByName = (name) => {
    return async function (dispatch) {
      try {
        let nameApi = name.toLowerCase()
        let videogamesSearch = axios.get(`https://api.rawg.io/api/games/${nameApi}?key=cdb7f82b2f484adea80e4ca087b51cd2`)

        return dispatch({
            type: 'SEARCH_BY_NAME',
            payload: videogamesSearch.data,
        })
      }catch(error){
        console.log(error)
      }
    }
};


export const getVideogamesDetail = (id) => {
    return async function (dispatch) {
        try {
            let videogamesDetail = await axios.get(`https://api.rawg.io/api/games/${id}?key=cdb7f82b2f484adea80e4ca087b51cd2`)

            return dispatch({
                type: 'GET_DETAIL',
                payload: videogamesDetail.data,
            });
        }
        catch (error){
            console.log(error);
        };
    };
};

export const getGenero = () => {
    return async function (dispatch) {
      //dispatch({ type: "LOADING" })
      var genero = await axios.get("https://api.rawg.io/api/genres?key=cdb7f82b2f484adea80e4ca087b51cd2");
      return dispatch({
        type: "GET_GENERO",
        payload: genero.data,
      });
    };
  };

export const getMostPopular = () => {
  return async function (dispatch) {
    let popular = await axios.get("https://api.rawg.io/api/games?key=cdb7f82b2f484adea80e4ca087b51cd2&dates=2019-01-01,2019-12-31&ordering=-added");
    return dispatch({
      type: "GET_MOST_POPULAR",
      payload: popular.data
    })
  }
}

  export function filerByName(payload) {
    return{
      type: "FILTER_BY_NAME",
      payload,
    }
  }

  export function filterByGenero(payload){
    return{
      type: 'FILTER_BY_GENERO',
      payload,
    }
  }

  export function filterByPlatform(payload){
    return{
      type: 'FILTER_BY_PLATFORM',
      payload,
    }
  }