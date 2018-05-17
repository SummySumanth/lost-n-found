import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import allReducers from './reducers/index';
import DummyComponent from './components/DummyComponent';

import '../scss/index.scss';


const loggerMiddleware = createLogger({ predicate: () => ({ logger: console, diff: true }) });


const store = createStore(
    allReducers,
    applyMiddleware(loggerMiddleware)
);

ReactDOM.render(
    <Provider store={store}>
        <DummyComponent />
    </Provider>
    ,document.getElementById('root')
);
