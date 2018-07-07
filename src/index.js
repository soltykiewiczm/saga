import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Home from './routes/home/home.container';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from './modules/root.reducer';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './modules/root.saga';
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));sagaMiddleware.run(rootSaga);

render(
    <Provider store={store}>
        <Home />
    </Provider>,
    document.getElementById('root'));