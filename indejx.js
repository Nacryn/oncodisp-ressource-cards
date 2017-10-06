'use strict';

// Boot express
const express = require('express');
const app = express();

// Load packages
const httpStatus = require('http-status-codes');

// Load app services
const useless = require('./service/dumb');

// Routes
app.get('/', (req, resp) => {
  console.log('received root request');
  resp.status(httpStatus.OK).send('Hello my friend');
});

app.get('/useless/:word', (req, resp) => {
  console.log('received useless request');
  const mess = useless(req.params.word);
  resp.status(httpStatus.OK).send(mess);
});

// Listen
app.listen(3000, () => {
  console.log('Up and running');
});
