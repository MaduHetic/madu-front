import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import GlobalStyle from './styles/global';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<><GlobalStyle/><App /></>, document.getElementById('root'));

serviceWorker.unregister();
