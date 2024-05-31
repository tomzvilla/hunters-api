const express = require('express');

const ammunitionRoute = require('./ammunition.route');
const supplierRoute = require('./supplier.route');
const authenticationRoute = require('./authentication.route');

const router = express.Router();

router.use('/ammunition', ammunitionRoute);
router.use('/supplier', supplierRoute);
router.use('/auth', authenticationRoute);

module.exports = router;
