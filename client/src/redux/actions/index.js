import axios from 'axios';

export const GET_DOGS = "GET_DOGS";
export const GET_BY_NAME = "GET_BY_NAME";
export const GET_BY_ID = "GET_BY_ID";
export const RESET_ID = "RESET_ID";
export const GET_TEMPS = "GET_TEMPS";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_BY_WEIGHT = "ORDER_BY_WEIGHT";
export const FILTER_BY_ORIGIN = "FILTER_BY_ORIGIN";
export const FILTER_BY_TEMP = "FILTER_BY_TEMP";


export function getDogs(){
    return async function(dispatch){
        const response = await axios.get('http://localhost:3001/dogs');
    return dispatch({
        type: "GET_DOGS",
        payload: response.data
    })
    }
};

export function getByName(name){
    return async function(dispatch){
        const response = await axios.get(`http://localhost:3001/dogs?name=${name}`);
    return dispatch({
        type: "GET_BY_NAME",
        payload: response.data
    })
    }
};

export function getById(idRaza){
    return async function(dispatch){
        const response = await axios.get(`http://localhost:3001/dogs/${idRaza}`);
    return dispatch({
        type: "GET_BY_ID",
        payload: response.data
    })
    }
};

export function resetId(){
    return {
        type: "RESET_ID",
    }
};

export function getTemps(){
    return async function(dispatch){
        const response = await axios.get(`http://localhost:3001/temperaments/form`);
    return dispatch({
        type: "GET_TEMPS",
        payload: response.data
    })
    }
};

export function sortByName(order){
    return {
        type: "ORDER_BY_NAME",
        payload: order
    }
};

export function sortByWeight(order){
    return {
        type: "ORDER_BY_WEIGHT",
        payload: order
    }
};

export function filterByOrigin(origin){
    return {
        type: "FILTER_BY_ORIGIN",
        payload: origin
    }
};