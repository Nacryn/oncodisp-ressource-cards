'use strict';

// Boot express
const express = require('express');
const app = express();

// Load packages
const httpStatus = require('http-status-codes');

// Routes
app.get('/', (req, resp) => {
  console.log('received root request');
  resp.status(httpStatus.OK).send('Hello my friend');
});

// Listen
app.listen(3000, () => {
  console.log('Up and running');
});
