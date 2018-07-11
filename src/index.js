import App from './App';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import middleware from './middleware';
import reducer from './reducers';
import { createStore } from 'redux';

const store = createStore(reducer, middleware);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

//TODO: remove the store.js file
