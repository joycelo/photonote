//here we are combining reducers

import { combineReducers } from 'redux';

// import all reducers here
import postcardReducer from './postcardReducer.js';

//combine reducers
const reducers = combineReducers({
    //all reducers listed here
    postcard: postcardReducer,
});

// make combined reducers available for import
export default reducers;