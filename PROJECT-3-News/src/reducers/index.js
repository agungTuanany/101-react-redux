// index.js REDUCERS

import { combineReducers } from 'redux';
import articles from './articles_reducer';

const rootReducers = combineReducers({
    articles
});

export default rootReducers;
