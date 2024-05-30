const express = require('express');

const ammunitionRoute = require('./ammunition.route');
const supplierRoute = require('./supplier.route');

const router = express.Router();

router.use('/ammunition', ammunitionRoute);
router.use('/supplier', supplierRoute);

module.exports = router;
