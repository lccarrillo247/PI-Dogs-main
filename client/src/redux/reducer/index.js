import { GET_DOGS, GET_BY_NAME, GET_BY_ID, RESET_ID, GET_TEMPS, ORDER_BY_NAME, ORDER_BY_WEIGHT, FILTER_BY_ORIGIN } from "../actions";

let initialState = {allDogs: [], dogsCopy: [], dogId: [], temps: []};

function rootReducer(state = initialState ,action) {

    let sorted;

    switch(action.type){
        case GET_DOGS:
            return{
                ...state,
                allDogs: action.payload,
                dogsCopy: action.payload
            }
            case GET_BY_NAME:
                return{
                    ...state,
                    allDogs: action.payload
                }
                case GET_BY_ID:
                    return{
                        ...state,
                        dogId: action.payload
                    }
                    case RESET_ID:
                        return{
                            ...state,
                            dogId: [],
                        }
                        case GET_TEMPS:
                            return{
                                ...state,
                                temps: action.payload
                            }
                            case ORDER_BY_NAME:

                            if(action.payload === "Ascendente"){
                                sorted = state.allDogs.sort((a,b) => (a.name > b.name ? 1 : -1))
                            }
                            if(action.payload === "Descendente"){
                                sorted = state.allDogs.sort((a,b) => (b.name > a.name ? 1 : -1))
                            }

                            return {
                                ...state,
                                allDogs: [...sorted],
                            }
                            case ORDER_BY_WEIGHT:

                            if(action.payload === "Ascendente"){
                                sorted = state.allDogs.sort((a,b) => (a.weight > b.weight ? 1 : -1))
                            }
                            if(action.payload === "Descendente"){
                                sorted = state.allDogs.sort((a,b) => (b.weight > a.weight ? 1 : -1))
                            }

                            return {
                                ...state,
                                allDogs: [...sorted],
                            }
                            case FILTER_BY_ORIGIN:
                            return {
                                    ...state,
                                    allDogs: state.allDogs.filter(
                                        (dog) => dog.created === action.payload
                                    )
                                }
        default:
            return state;
    }
}

export default rootReducer