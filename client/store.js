import { createStore } from 'redux';
//adding composeWithDevTools to get easy access to Redux dev tools
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/index.js';

const store = createStore(
    reducers,
    composeWithDevTools()
);

export default store;