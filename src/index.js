import App from './App';
import { Provider } from "react-redux";
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from '../../../Library/Caches/typescript/2.9/node_modules/redux';
import middleware from './middleware';
import reducer from './reducers';

const store = createStore(reducer, middleware);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

//TODO: remove the store.js file
