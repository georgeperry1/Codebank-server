'user strict';

//Get Schema:
const { Vault, Crypt, Gem } = require('../model');

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
    //Find all vaults in the DB and return in body
    const vaults = await Vault.find()
    ctx.body = vaults;
    ctx.status = 200;
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
    //Find vault in DB and return
    const id = ctx.params.vault_id;
    const vault = await Vault.findOne({_id: id}).populate('crypts');
    if (vault) {
      ctx.status = 200;
      ctx.body = vault;
    } else {
      ctx.status = 404;
      ctx.body = {
        Error:[
          'Vault does not exist'
        ]
      }
      console.log('Sorry, vault does not exist');
    }
  }
  catch (error) {
    if (error) {
      console.log('Error in showVault controller:', error);
      ctx.status = error.response.status;
      ctx.body = error.response.data;
    }
  }
};

const cleanBody = body => {
  return typeof body !== 'object' ? JSON.parse(body) : body;
};

//Create a vault
module.exports.createVault = async (ctx, next) => {
  if ('POST' != ctx.method) return await next();
  try {
    if (!ctx.request.body.name) {
      ctx.status = 404
    }
    //Parse body
    const data = cleanBody(ctx.request.body);

    //Create new vault
    const vault = await Vault.create({
      name: data.name,
      url: data.url,
      description: data.description
    });

    //Create new crypts
    const promises = await data.crypts.map(crypt => Crypt.create({
      name: crypt
    }));

    //Add reference to vault
    const crypts = await Promise.all(promises);
    vault.crypts = crypts.map(crypt => crypt._id);
    await vault.save();

    //Return vault and crypts
    ctx.body = [vault, crypts];
    ctx.status = 201;
  }
  catch (error) {
    if (error) {
      console.log('Error in the createVault controller:', error);
      ctx.status = error.response.status;
      ctx.body = error.response.data;
    }
  }
};
