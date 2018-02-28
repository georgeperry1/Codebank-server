'use strict';

//Init server
const koa = require('koa');
const app = module.exports = new koa();

//Dependencies
const bodyParser = require('koa-bodyparser');
const cors = require('kcors');
const logger = require('koa-logger');
const path = require('path');
const routes = require('./routes.js');
const serve = require('koa-static');

// Middleware
app.use(logger());
app.use(cors());
app.use(bodyParser());
