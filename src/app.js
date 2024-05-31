const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const config = require('./config/config')
const app = express();

const routesV1 = require('./routes/v1')

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// enable cors
const allowedOrigins = config.allowedOrigins.split(',');
const corsOptions = {
    origin: (origin, callback) => {
      if (!origin) return callback(null, true);
  
      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true
};
app.use(cors(corsOptions));
// app.options('*', cors(corsOptions));
// middlewares
app.use(express.json());
app.use(cookieParser());

// api routes
app.use('/v1',routesV1);

module.exports = app;