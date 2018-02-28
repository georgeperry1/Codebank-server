'use strict';

//Require mongoose
const mongoose = require('mongoose');

//Connect to the 'Vaults' mongo database
mongoose.connect('mongodb://localhost/vaults')
.then(() => {
  console.log('Successfully connected to database...');
})
.catch(err => {
  console.log('ERROR:', err);
})
