'use strict';

const fs = require('fs');
const faker = require('faker');

let file = process.argv[2];

fs.readFile(file, (err,data) => {
  if ( err ) { throw err; }
  let actualContents = data.toString().trim();
  console.log('Test',actualContents);
});

fs.appendFile(file, `${faker.random.word()}`, (data, err)  => {
  if ( err ) {throw err; }
  console.log('SAVE SUCCESSFUL');
});

fs.readFile(file, (err,data) => {
  if ( err ) { throw err; }
  let actualContents = data.toString().trim();
  console.log('Test',actualContents);
});