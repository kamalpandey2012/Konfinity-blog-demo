import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { render } from 'react-dom';
import routes from './routes';
import { browserHistory, Router } from 'react-router';

render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('root')
);
