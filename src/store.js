import {createStore, applyMiddleware, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';


const store = createStore(
    
);

export default store;