'user strict';

//FIX:
const Vault = require('../model')

//Show a selected crypt
module.exports.showCrypt = async (ctx, next) => {
  if ('GET' != ctx.method) return await next();
  try {

  }
  catch (error) {
    if (error) {
      console.log('Error in showCrypt controller:', error);
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
    if (error) {
      console.log('Error in showGem controller:', error);
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
    if (error) {
      console.log('Error in createGem controller:', error);
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
    if (error) {
      console.log('Error in voteUp controller:', error);
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
    if (error) {
      console.log('Error in voteDown controller:', error);
      ctx.status = error.response.status;
      ctx.body = error.response.data;
    }
  }
};
