import { GET_DOGS } from "../actions";

let initialState = {allDogs: []};

function rootReducer(state = initialState,action) {
    switch(action.type){
        case GET_DOGS:
            return{
                ...state,
                allDogs: action.payload
            }
        default:
            return state;
    }
}

export default rootReducer