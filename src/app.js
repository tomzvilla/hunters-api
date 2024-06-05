const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const httpStatus = require('http-status');
const config = require('./config/config')
const { errorConverter, errorHandler } = require('./middlewares/error');
const ApiError = require('./controllers/ApiError');

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

// send back a 404 error for any unknown api request
app.use((req, res, next) => {
  next(new ApiError(httpStatus.NOT_FOUND, 'Not found'));
});

// convert error to ApiError, if needed
app.use(errorConverter);

// handle error
app.use(errorHandler);

module.exports = app;