'use strict';

//Require mongoose and schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Vault Schema
const Vault = new Schema({
  name: String,
  url: String,
  description: String
});

//Gem Schema
// const GemSchema = new Schema({
//   title: String,
//   url: String,
//   type: String
// });

module.exports = mongoose.model('Vault', Vault);
//const Gem = mongoose.model('Gem', GemSchema);

// module.exports = {
//   Vault: Vault,
//   Gem: Gem
// }
