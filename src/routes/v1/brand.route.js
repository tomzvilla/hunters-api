const express = require('express');

// middlewares
const methodNotAllowed = require('../../middlewares/methodNotAllowed');
const validate = require('../../middlewares/validate');
const auth = require('../../middlewares/auth');

const { brandValidation: validation } = require('../../validations');
const { brandController: controller } = require('../../controllers');

const router = express.Router();

router
    .route('/')
    .get(auth, controller.getBrands)
    .post(auth, validate(validation.brandParameters), controller.createBrand)
    .all(methodNotAllowed);

module.exports = router;
