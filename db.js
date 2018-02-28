'use strict';

const fs = require('fs');

const dataFilePath = __dirname + './mock.json';

const db = {vaults: []};

fs.readFile(dataFilePath, 'utf8', (error, data) => {
  try {
    data = JSON.parse(data)
  } catch (error) {
    console.log('Error in db file:', error);
  }
  if (data && data.vaults) {
    db.vaults = data.vaults
  };
});

setInterval(function () {
  fs.writeFile(dataFilePath, JSON.stringify(db), (error) => {
    if (error) throw error;
  });
}, 5000);

module.exports = db;
