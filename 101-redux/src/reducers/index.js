// index.js REDUCERS

import { combineReducers } from "redux";
import movies from "./movies_reducer";

const rootReducers = combineReducers({
    movies
});

export default rootReducers;
