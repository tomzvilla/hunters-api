const express = require('express');

const ammunitionRoute = require('./ammunition.route');

const router = express.Router();

router.use('/ammunition', ammunitionRoute);

module.exports = router;
