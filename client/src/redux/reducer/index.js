import { GET_DOGS,
    GET_BY_NAME,
    GET_BY_ID,
    RESET_ID,
    GET_TEMPS,
    ORDER_BY_NAME,
    ORDER_BY_WEIGHT,
    FILTER_BY_ORIGIN,
    FILTER_BY_TEMP } from "../actions";

let initialState = { allDogs: [], dogsCopy: [], dogId: [], temps: [] };

function rootReducer(state = initialState, action) {

    let sorted;

    switch (action.type) {
        case GET_DOGS:
            return {
                ...state,
                allDogs: action.payload,
                dogsCopy: action.payload
            }
        case GET_BY_NAME:
            return {
                ...state,
                allDogs: action.payload
            }
        case GET_BY_ID:
            return {
                ...state,
                dogId: action.payload
            }
        case RESET_ID:
            return {
                ...state,
                dogId: [],
            }
        case GET_TEMPS:
            return {
                ...state,
                temps: action.payload
            }
        case ORDER_BY_NAME:

            if (action.payload === "Ascendente") {
                sorted = state.allDogs.sort((a, b) => (a.name > b.name ? 1 : -1))
            }
            if (action.payload === "Descendente") {
                sorted = state.allDogs.sort((a, b) => (b.name > a.name ? 1 : -1))
            }

            return {
                ...state,
                allDogs: [...sorted],
            }
        case ORDER_BY_WEIGHT:

            if (action.payload === "Ascendente") {
                sorted = state.allDogs.sort((a, b) => (a.weight > b.weight ? 1 : -1))
            }
            if (action.payload === "Descendente") {
                sorted = state.allDogs.sort((a, b) => (b.weight > a.weight ? 1 : -1))
            }

            return {
                ...state,
                allDogs: [...sorted],
            }
        case FILTER_BY_ORIGIN:

            let filtered = [];

            if (action.payload === "Todos") {
                filtered = state.dogsCopy.filter((dog) => dog.id)
            }
            if (action.payload === 'API') {
                filtered = state.dogsCopy.filter((dog) => dog.created === false)
            }
            if (action.payload === 'Base de datos') {
                filtered = state.dogsCopy.filter((dog) => dog.created === true)
            }

            return {
                ...state,
                allDogs: filtered
            }
            case FILTER_BY_TEMP:

            let filteredT = [] 

            if (action.payload === "Todos") {
                filteredT = state.dogsCopy.filter((dog) => dog.id)
            } else {
                filteredT = state.dogsCopy.filter((dog) => {
                    // Check if Temperaments exists and is an array
                    if (Array.isArray(dog.Temperaments)) {
                        return action.payload.every((temp) =>
                            dog.Temperaments.map((t) => t.name).includes(temp)
                        );
                    }
                    return false; // Return false for dogs with empty or undefined Temperaments
                });
            }

            return {
                ...state,
                allDogs: filteredT
            }
        default:
            return state;
    }
}

export default rootReducer