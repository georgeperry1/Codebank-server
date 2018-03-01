'use strict';

//Require mongoose
const mongoose = require('mongoose');

// //Connect to the 'Vaults' mongo database
// mongoose.connect('mongodb://localhost/vaults')
// .then(() => {
//   console.log('Successfully connected to database...');
// })
// .catch(err => {
//   console.log('ERROR:', err);
// })


//CAN I DO THIS:

//Connect to Vaults Collection
const vaultsCollection = mongoose.connect('mongodb://localhost/vaults')
.then(() => {
  console.log('Successfully connected to Vaults database...');
})
.catch(err => {
  console.log('ERROR:', err);
})

//Connect to Crypts Collection
const cryptsCollection = mongoose.connect('mongodb://localhost/crypts')
.then(() => {
  console.log('Successfully connected to Crypts database...');
})
.catch(err => {
  console.log('ERROR:', err);
})

//Connect to Gems Collection
const gemsCollection = mongoose.connect('mongodb://localhost/gems')
.then(() => {
  console.log('Successfully connected to Gems database...');
})
.catch(err => {
  console.log('ERROR:', err);
})
