'use strict';

//Require mongoose and schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Vault Schema
const VaultSchema = new Schema({
  name: String,
  url: String,
  description: String,
  crypts: Array
});

//Crypt Schema
const CryptSchema = new Schema({
  name: String,
  gems: Array
});

//Gem Schema
const GemSchema = new Schema({
  title: String,
  url: String,
  type: String,
  votes: Number
});

module.exports.Vault = mongoose.model('Vault', VaultSchema);
module.exports.Crypt = mongoose.model('Crypt', CryptSchema);
module.exports.Gem = mongoose.model('Gem', GemSchema);

// module.exports = {
//   Vault: Vault,
//   Crypt: Crypt,
//   Gem: Gem
// }
