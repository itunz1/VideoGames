const initialState = {
    videogames: [],
    allGenero: [],
    detail: [],
    allVideogames: [],
    mostPopular: [],
    filter: [],
};

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_VIDEOGAMES":
            return {
                ...state,
                videogames: action.payload,
                allVideogames: action.payload,
                filter: action.payload,
            }
        case "SEARCH_BY_NAME":
            return {
                ...state,
                videogames: action.payload,
            }
        case "GET_DETAIL":
            return {
                ...state,
                detail: action.payload,
            }
        case "GET_GENERO":
            return {
                ...state,
                allGenero: action.payload,
            }
        case "GET_MOST_POPULAR":
            return {
                ...state,
                mostPopular: action.payload,
                // videogames: action.payload,
            }
        case "FILTER_BY_NAME":
            const allGames = state.allVideogames;
            const orderGames = action.payload === 'abc'
                ? allGames.sort(function (a, b) {
                    if (a.name.toLowerCase() > b.name.toLowerCase()) {
                        return 1;
                    }
                    if (b.name.toLowerCase() > a.name.toLowerCase()) {
                        return -1
                    }
                    return 0;
                })
                : allGames.sort(function (a, b) {
                    if (a.name.toLowerCase() > b.name.toLowerCase()) {
                        return -1
                    }
                    if (b.name.toLowerCase() > a.name.toLowerCase()) {
                        return 1
                    }
                    return 0;
                })
            return {
                ...state,
                videogames: orderGames,
            };
        case 'FILTER_BY_GENERO':
            const generoOrder = state.allVideogames;
            const orderGenero = action.payload === 'all' ? generoOrder : generoOrder.filter(e =>
                e.genres.some(g => g === action.payload || g.name === action.payload));
            return {
                ...state,
                videogames: orderGenero,
            }
        case 'FILTER_BY_PLATFORM':
            const platformOrder = state.allVideogames;
            const orderPlatform = action.payload === 'all' ? platformOrder : platformOrder.filter(e =>
                e.platforms.some(p => p === action.payload || p.name === action.payload));
            return {
                ...state,
                videogames: orderPlatform,
            }
        //   case "LOADING":
        //       return{
        //         ...state,
        //         loading: true,
        //       }
        default:
            return state;
    }
};

export default rootReducer;