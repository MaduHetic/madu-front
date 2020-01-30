import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from "redux-saga";
import axiosMiddleware from 'redux-axios-middleware';
import createRootReducer from '../core';
import { client, options } from '../helpers/api';
import rootSaga from "./rootSagas";


const sagaMiddleware = createSagaMiddleware();

const middleware = [
  axiosMiddleware(client, options),
  sagaMiddleware,
];

const createStoreWithMiddleware = compose(applyMiddleware(...middleware)(createStore));

export function configure(initialState) {
  const configStore = createStoreWithMiddleware(
    createRootReducer(),
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
  sagaMiddleware.run(rootSaga);
  return configStore;
}