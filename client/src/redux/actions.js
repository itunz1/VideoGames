import axios from "axios";



export const getVideogames = () => {
    return async function (dispatch) {
        let videogames = await axios.get('http://localhost:3001/videogame');

        return dispatch({
            type: 'GET_VIDEOGAMES',
            payload: videogames.data
        });
    };
};

export const searchByName = (name) => {
    return async function (dispatch) {
        let videogamesSearch = axios.get(`http://localhost:3001/videogame?name=${name}`)

        return dispatch({
            type: 'SEARCH_BY_NAME',
            payload: videogamesSearch.data
        });
    };
};


export const getVideogamesDetail = (id) => {
    return async function (dispatch) {
        try {
            let videogamesDetail = await axios.get(`http://localhost:3001/videogame/${id}`)

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
      var genero = await axios.get("http://localhost:3001/videogame/genero");
      return dispatch({
        type: "GET_GENERO",
        payload: genero.data,
      });
    };
  };

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