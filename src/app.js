const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();

const routesV1 = require('./routes/v1')

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// enable cors
const corsOptions = {
    origin: 'http://localhost:5173',
    credentials: true,
};
app.use(cors(corsOptions));
// app.options('*', cors(corsOptions));
// middlewares
app.use(express.json());
app.use(cookieParser());

// api routes
app.use('/v1',routesV1);

module.exports = app;