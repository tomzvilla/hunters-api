const express = require('express');

// middlewares
const methodNotAllowed = require('../../middlewares/methodNotAllowed');
const validate = require('../../middlewares/validate');
const auth = require('../../middlewares/auth');

const { supplierValidation: validation } = require('../../validations');
const { supplierController: controller } = require('../../controllers');

const router = express.Router();

router
    .route('/')
    .get(auth, controller.getSuppliers)
    .post(auth, validate(validation.supplierParameters), controller.updateSupplier)
    .all(methodNotAllowed);

module.exports = router;
