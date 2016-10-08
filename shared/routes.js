/**
 * Shared routing configuration for browser and server. 
 */
import React from 'react';
import {Router, Route} from 'react-router';

import Application from '../components/Application';
import About from '../components/About';
import Home from '../components/Home';

/* eslint-disable react/display-name */
export default history => (
  <Router history={history}>
    <Route component={Application}>
      <Route name="home" path="/" component={Home} />
      <Route name="about" path="/about" component={About} />
    </Route>
  </Router>
);
