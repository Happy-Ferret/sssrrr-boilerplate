/**
 *  Configuration of the server instance.
 */
import express from 'express';
import createReactMiddleware from './middleware';

const app = express();
const SERVER_PORT = process.env.PORT || 8080;

app.use('/assets', express.static(__dirname + '/../assets/'));

/**
 * Redux initial state
 */
const initialState = {
  counter : 1
};

/*
 * Creating preconfigured middleware instance with custon html template.
 * Template can be replaced with anything and any supported/unsupported
 * html engine.
 *
 * It is a special part of the application, because it describes how 
 * client will load its asset files. For an instance there will be a time
 * we will need some css support for page, the imports have to be 
 * specified inside of this template.
 *
 * It is our index.html.
 */
const reactMiddleware = createReactMiddleware(initialState, (content = '', state = {}) =>
` <!doctype html>
   <div id="application">${content}</div>
   <script>window.__INITIAL_STATE__ = ${JSON.stringify(state)};</script>
   <script src="/assets/bundle.js"></script>
`);

/**
 * Finally applying middleware
 */
app.use('*', reactMiddleware);


app.listen(SERVER_PORT, function(){
  console.log(`===> App started on ${SERVER_PORT} port.`); 
});

