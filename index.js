'use strict';

// Init server
const koa = require('koa');
const app = module.exports = new koa();

// Dependencies
const bodyParser = require('koa-body');
const compress = require('koa-compress');
const cors = require('kcors');
const logger = require('koa-logger');
const path = require('path');
const routes = require('./routes.js');
const serve = require('koa-static');
require('./db');

// Middleware
app.use(logger());
app.use(cors());
app.use(bodyParser({
  multipart:true
}));

// Add routes
routes(app);

// Serve static files
app.use(serve(path.join(__dirname, 'public')));

// Compress
app.use(compress());

// Run server
if (!module.parent) {
  const port = process.env.PORT || 3000;
  app.listen(port);
  console.log('Server is listening on port:', port);
}
