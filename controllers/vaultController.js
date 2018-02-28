'user strict';

const Vault = require('../model')

//Home page
module.exports.home = async (ctx, next) => {
  if ('GET' != ctx.method) return await next();
  try {
    console.log('Great success in the home controller');
    ctx.status = 200;
  }
  catch (error) {
    if (error) {
      console.log('Error in the home controller:', error);
      ctx.status = error.response.status;
      ctx.body = error.response.data;
    }
  }
};

//Show all vaults
module.exports.vaults = async (ctx, next) => {
  if ('GET' != ctx.method) return await next();
  try {
    Vault.find()
    .then(vaults => {
      console.log('VAULTS:', vaults);
      ctx.body = vaults;
      ctx.status = 200;
      console.log('Great success in the vaults controller');
    });
  }
  catch (error) {
    if (error) {
      ctx.status = error.response.status;
      ctx.body = error.response.data;
      console.log('Error in vaults controller:', ctx.status);
    }
  }
};

//Show a selected vault
module.exports.showVault = async (ctx, next) => {
  if ('GET' != ctx.method) return await next();
  try {

  }
  catch (error) {
    console.log('Error in showVault controller:', error);
    if (error) {
      ctx.status = error.response.status;
      ctx.body = error.response.data;
    }
  }
};

//Create a vault
module.exports.createVault = async (ctx, next) => {
  if ('POST' != ctx.method) return await next();
  try {

  }
  catch (error) {
    console.log('Error in createVault controller:', error);
    if (error) {
      ctx.status = error.response.status;
      ctx.body = error.response.data;
    }
  }
};

//Show a selected gem
module.exports.showGem = async (ctx, next) => {
  if ('GET' != ctx.method) return await next();
  try {

  }
  catch (error) {
    console.log('Error in showGem controller:', error);
    if (error) {
      ctx.status = error.response.status;
      ctx.body = error.response.data;
    }
  }
};

//Create a gem
module.exports.createGem = async (ctx, next) => {
  if ('POST' != ctx.method) return await next();
  try {

  }
  catch (error) {
    console.log('Error in createGem controller:', error);
    if (error) {
      ctx.status = error.response.status;
      ctx.body = error.response.data;
    }
  }
};

//Upvote a gem
module.exports.voteUp = async (ctx, next) => {
  if ('PUT' != ctx.method) return await next();
  try {

  }
  catch (error) {
    console.log('Error in voteUp controller:', error);
    if (error) {
      ctx.status = error.response.status;
      ctx.body = error.response.data;
    }
  }
};

//Downvote a gem
module.exports.voteDown = async (ctx, next) => {
  if ('PUT' != ctx.method) return await next();
  try {

  }
  catch (error) {
    console.log('Error in voteDown controller:', error);
    if (error) {
      ctx.status = error.response.status;
      ctx.body = error.response.data;
    }
  }
};
