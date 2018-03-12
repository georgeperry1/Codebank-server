'use strict';

//Require mongoose and schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Vault Schema
const VaultSchema = new Schema({
  name: String,
  url: String,
  description: String,
  crypts: [{type: Schema.Types.ObjectId, ref: 'Crypt'}]
});

//Crypt Schema
const CryptSchema = new Schema({
  name: String,
  parentVault: String,
  gems: [{type: Schema.Types.ObjectId, ref: 'Gem'}]
});

//Gem Schema
const GemSchema = new Schema({
  title: String,
  url: String,
  parentVault: String,
  parentCrypt: String,
  type: String,
  votes: {type: Number, default: 0}
});

module.exports.Vault = mongoose.model('Vault', VaultSchema);
module.exports.Crypt = mongoose.model('Crypt', CryptSchema);
module.exports.Gem = mongoose.model('Gem', GemSchema);
