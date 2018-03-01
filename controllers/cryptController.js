'user strict';

//Get Schema:
const { Vault, Crypt, Gem } = require('../model');

//Show a selected crypt
module.exports.showCrypt = async (ctx, next) => {
  if ('GET' != ctx.method) return await next();
  try {
    console.log('Vault ID:', ctx.params.vault_id);
    console.log('Crypt ID:', ctx.params.crypt_id);
    const id = ctx.params.crypt_id;
    const crypt = await Crypt.findOne({_id: id}).populate('gems');
    if (crypt) {
      ctx.status = 200;
      ctx.body = crypt;
    } else {
      ctx.status = 404;
      ctx.body = {
        Error:[
          'Vault does not exist'
        ]
      }
      console.log('Sorry, crypt does not exist');
    }
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
    if (!ctx.request.body.title) {
      console.log('Please fill in all required fields');
      ctx.status = 400
    }

    //Create new gem
    const gem = await Gem.create({
      title: ctx.request.body.title,
      url: ctx.request.body.url,
      type: ctx.request.body.type,
      votes: 0
    });

    //Store reference in parent crypt
    const id = ctx.params.crypt_id;
    const crypt = await Crypt.findOne({_id: id}).populate('gems');
    crypt.gems.push(gem);
    crypt.gems = crypt.gems.map(gem => gem._id);
    await crypt.save();

    //Return gem
    ctx.body = gem;
    ctx.status = 201;
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
