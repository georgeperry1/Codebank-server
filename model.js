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

const Vault = mongoose.model('Vault', VaultSchema);
const Crypt = mongoose.model('Crypt', CryptSchema);
const Gem = mongoose.model('Gem', GemSchema);

module.exports = {
  Vault: Vault,
  Crypt: Crypt,
  Gem: Gem
}
