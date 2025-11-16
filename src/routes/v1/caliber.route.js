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
    .get(auth, controller.list)
    .post(auth, validate(validation.create), controller.create)
    .all(methodNotAllowed);

router
    .route('/:caliberId')
    .put(auth, validate(validation.update), controller.update)
    .all(methodNotAllowed);

module.exports = router;
