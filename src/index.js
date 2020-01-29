import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { configure } from './store/configureStore';

import App from './App';

import './index.css';

const store = configure();
const target = document.querySelector('#root');

render(
  <Provider store={store}>
    <App />
  </Provider>,
  target,
);