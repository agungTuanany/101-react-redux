// index.js REDUCERS

import { combineReducers } from 'redux';
import articles from './articles_reducer';
import gallery from './galleries_reducer';

const rootReducers = combineReducers({
    articles,
    gallery
});

export default rootReducers;
