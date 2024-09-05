const express = require('express');

const ammunitionRoute = require('./ammunition.route');
const supplierRoute = require('./supplier.route');
const ammoTypeRoute = require('./ammoType.route');
const brandRoute = require('./brand.route');
const caliberRoute = require('./caliber.route');
const authenticationRoute = require('./authentication.route');
const customerRoute = require('./customer.route');
const procedureTypeRoute = require('./procedureType.route');
const procedureStatusRoute = require('./procedureStatus.route');

const router = express.Router();

router.use('/ammunition', ammunitionRoute);
router.use('/supplier', supplierRoute);
router.use('/ammo-type', ammoTypeRoute);
router.use('/caliber', caliberRoute);
router.use('/brand', brandRoute);
router.use('/customer', customerRoute);
router.use('/auth', authenticationRoute);
router.use('/procedure-type', procedureTypeRoute);
router.use('/procedure-status', procedureStatusRoute);

module.exports = router;
