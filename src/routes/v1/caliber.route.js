const express = require('express');

// middlewares
const methodNotAllowed = require('../../middlewares/methodNotAllowed');
const validate = require('../../middlewares/validate');
const auth = require('../../middlewares/auth');

const { caliberValidation: validation } = require('../../validations');
const { caliberController: controller } = require('../../controllers');

const router = express.Router();

router
    .route('/')
    .get(auth, controller.getCalibers)
    .post(auth, validate(validation.caliberParameters), controller.createCaliber)
    .all(methodNotAllowed);

module.exports = router;
