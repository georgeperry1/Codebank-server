'user strict';

//Get Schema:
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
  console.log(ctx.params);
  try {
    const id = ctx.params.vault_id;
    let vault = await Vault.findOne({_id: id});
    if (vault) {
      ctx.status = 200;
      ctx.body = vault;
      console.log('VAULT:', vault);
      console.log('We successfully the vault!');
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

//Create a vault
module.exports.createVault = async (ctx, next) => {
  if ('POST' != ctx.method) return await next();
  try {
    if (!ctx.request.body.name) {
      console.log('Please fill in all required fields');
      ctx.status = 400
    }
    const vault = await Vault.create({
      name: ctx.request.body.name,
      url: ctx.request.body.url,
      description: ctx.request.body.description,
      crypts: ctx.request.body.crypts
    })
    console.log('NEW VAULT:', vault);
    ctx.body = vault;
    ctx.status = 201;
    console.log('Great success in the createVaults controller');
  }
  catch (error) {
    if (error) {
      console.log('Error in the createVault controller:', error);
      ctx.status = error.response.status;
      ctx.body = error.response.data;
    }
  }
};
