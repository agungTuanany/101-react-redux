// index.js Reducers

import { combineReducers } from 'redux';
import cars from './cars_reducer';
import carDetail from './car_detail';

const rootReducer = combineReducers({
    cars,
    carDetail
});

export default rootReducer;
