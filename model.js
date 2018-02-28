'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Vault = new Schema({
  name: String,
  url: String,
  description: String
});

module.exports = mongoose.model('Vault', Vault);
