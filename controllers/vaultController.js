'user strict';

const db = require('../mock.json');

//Home page
module.exports.home = async (ctx, next) => {

};

//Show all vaults
module.exports.vaults = async (ctx, next) => {

};

//Show a selected vault
module.exports.showVault = async (ctx, next) => {

};

//Create a vault
module.exports.createVault = async (ctx, next) => {

};

//Show a selected gem
module.exports.showGem = async (ctx, next) => {

};

//Create a gem
module.exports.createGem = async (ctx, next) => {

};

//Upvote and downvote a gem
module.exports.vote() = async (voteUp) => (ctx, next) => {
  const increment = (voteUp) ? 1 : -1;

};
