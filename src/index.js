import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { configure } from './store/configureStore';
import GlobalStyle from './styles/global';
import App from './components/App';

const store = configure();
const target = document.querySelector('#root');

render(
  <>
    <Provider store={store}>
      <App />
    </Provider>
    <GlobalStyle/>
  </>,
  target,
);
