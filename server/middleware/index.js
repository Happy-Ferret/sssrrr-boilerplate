/**
 * Server Side Rendering (SSR) middleware.
 *
 * == With support of:
 *
 * 1. React components for rendering server pages.
 * 2. React router handling the routes
 * 3. Redux states for initial application data
 */
import React from 'react';
import {renderToString} from 'react-dom/server';
import {Provider} from 'react-redux';
import {match, RouterContext} from 'react-router';

import createRoutes from '../../shared/routes';
import createStore from '../../shared/store';

const routes = createRoutes(null);

/**
 * Bootstrap function for redux providers.
 *
 * @name bootstrap
 * @function
 * @access public
 * @param {Object} renderProps
 * @param {Object} initialState
 * @param {function} render
 * @returns {String} rendered html template
 */
const bootstrap = (renderProps, initialState, render) => { 
  const store = createStore(initialState);
  const content = renderToString(
    <Provider store={store}>
      <RouterContext {...renderProps}/>
    </Provider>
  );
  const state = store.getState();
  return render(content, state);
};

/**
 * React server side rendering middleware for node's `express` tool.
 *
 * @name default
 * @function
 * @access public
 * @param {Object} initialState = {} Initial state of the application.
 * @param {function} render Render function that will render the html page of the application
 * @returns {function} Middleware
 */
export default (initialState = {}, render) => (req, res, next) =>
    match({routes, location : req.originalUrl}, (error, redirectLocation, renderProps) => {
      if (redirectLocation) {
        res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      } else  if (!error && renderProps) {
        res.status(200).end(bootstrap(renderProps, initialState, render));
      } else {
        next();
      }
    });

