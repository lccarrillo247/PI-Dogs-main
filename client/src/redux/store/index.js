import {createStore, applyMiddleware} from'redux';
import {composeWithDevTools} from "redux-devtools-extension";
import devToolsEnhancer from 'remote-redux-devtools';
import thunk from "redux-thunk";
import rootReducer from '../reducer';

export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)))