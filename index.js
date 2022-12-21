'use strict';

let { start } = require('./src/server');
let { db } = require('./src/auth/models');

db.sync()
  .then(() => {
    console.log('Successfully Connected');
    start(3001);
  })
  .catch((e) => console.error(e));