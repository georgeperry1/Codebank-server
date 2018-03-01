'use strict';

//Require mongoose
const mongoose = require('mongoose');

//Connect to Vaults DB
mongoose.connect('mongodb://localhost/vaults')
.then(() => {
  console.log('Successfully connected to Vaults database...');
})
.catch(err => {
  console.log('ERROR:', err);
});
