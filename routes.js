'use strict';

//Dependencies
const router = require('koa-router')();
const userController = require('./controllers/userController');
const vaultController = require('./controllers/vaultController');

//API Routes
const routes = function (app) {
  //From vaultController
  router.get('/', vaultController.home); //Home page
  router.get('/vaults', vaultController.vaults); //Show all vaults
  router.get('/vault/:id', vaultController.showVault); //Show a selected vault
  router.post('/vaults/create', vaultController.createVault); //Create a vault
  router.get('/vaults/:id/gems/:id', vaultController.showGem) //Show a selected gem
  router.post('/vaults/:id/gems/create', vaultController.createGem); //Create a gem
  router.put('/vaults/:id/gems/:id/up', vaultController.voteUp); //Upvote a gem
  router.put('/vaults/:id/gems/:id/down', vaultController.voteDown); //Downvote a gem

  //From userController
  router.get('/profile', userController.showProfile);
  router.get('/login', userController.login);
  router.post('/sign-up', userController.signUp);

  app.use(router.routes())

  return app;
}

module.exports = routes;
