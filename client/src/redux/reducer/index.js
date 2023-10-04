import { GET_DOGS, GET_BY_NAME, GET_BY_ID, RESET_ID } from "../actions";

let initialState = {allDogs: [], dogsCopy: [], dogId: []};

function rootReducer(state = initialState ,action) {
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
        default:
            return state;
    }
}

export default rootReducer