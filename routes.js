'use strict';

//Dependencies
const router = require('koa-router')();
const userController = require('./controllers/userController');
const vaultController = require('./controllers/vaultController');
const cryptController = require('./controllers/cryptController');

//API Routes
const routes = function (app) {
  //From vaultController
  router.get('/', vaultController.home); //Home page
  router.get('/vaults', vaultController.vaults); //Show all vaults
  router.get('/vault/:vault_id', vaultController.showVault); //Show a selected vault
  router.post('/vaults/create', vaultController.createVault); //Create a vault

  //From cryptController
  router.post('/vault/:vault_id/create', cryptController.createCrypt); //Create a new Crypt
  router.get('/vault/:vault_id/:crypt_id', cryptController.showCrypt); //Show a selected crypt
  router.get('/vault/:vault_id/:crypt_id/:gem_id', cryptController.showGem) //Show a selected gem
  router.post('/vault/:vault_id/:crypt_id/create', cryptController.createGem); //Create a gem
  router.put('/vault/:vault_id/:crypt_id/:gem_id/up', cryptController.voteUp); //Upvote a gem
  router.put('/vault/:vault_id/:crypt_id/:gem_id/down', cryptController.voteDown); //Downvote a gem

  //From userController
  router.get('/profile', userController.showProfile);
  router.get('/login', userController.login);
  router.post('/sign-up', userController.signUp);

  app.use(router.routes())

  return app;
}

module.exports = routes;
