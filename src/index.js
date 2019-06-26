import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducers from "./Reducers";


import Routes from './Routes'
import './index.css';

import thunk from 'redux-thunk';
const createStoreWithMidlleware = applyMiddleware(thunk)(createStore);

ReactDOM.render (
    <Provider store={createStoreWithMidlleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);

serviceWorker.unregister();
