import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx';
import { Provider } from 'react-redux';
import store from "./store";

// uncomment so that webpack can bundle styles
// import styles from './scss/application.scss';

// render(<App />, document.getElementById('root'));

render(
    // wrap the App in the Provider and pass in the store
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("contents")
);