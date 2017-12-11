import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { render } from 'react-dom';
import routes from './routes';
import { browserHistory, Router } from 'react-router';

let store = configureStore();
render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('root')
);
