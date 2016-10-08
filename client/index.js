/**
 * Browser's application entry point. 
 */ 
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {browserHistory } from 'react-router';
import createStore from '../shared/store';
import createRoutes from '../shared/routes';

const store = createStore(window.__INITIAL_STATE__ || {});
const ApplicationRoutes = createRoutes(browserHistory);

render((
  <Provider store={store}>
    {ApplicationRoutes}
  </Provider>
  ),
  document.getElementById('application'));




