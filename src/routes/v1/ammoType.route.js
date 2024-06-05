const express = require('express');

// middlewares
const methodNotAllowed = require('../../middlewares/methodNotAllowed');
const validate = require('../../middlewares/validate');
const auth = require('../../middlewares/auth');

const { ammoTypeValidation: validation } = require('../../validations');
const { ammoTypeController: controller } = require('../../controllers');

const router = express.Router();

router
    .route('/')
    .get(auth, controller.getAmmoTypes)
    .post(auth, validate(validation.ammoTypeParameters), controller.createAmmoType)
    .all(methodNotAllowed);

module.exports = router;
