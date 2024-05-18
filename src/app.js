const express = require('express');
const cors = require('cors');

const app = express();

const routesV1 = require('./routes/v1')

// middlewares
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// enable cors
app.use(cors());
app.options('*', cors());

// api routes
app.use('/v1',routesV1);

module.exports = app;