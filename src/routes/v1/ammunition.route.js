const express = require('express');

// middlewares
const methodNotAllowed = require('../../middlewares/methodNotAllowed');
const validate = require('../../middlewares/validate');
const auth = require('../../middlewares/auth');

const { ammunitionValidation: validation } = require('../../validations');
const { ammunitionController: controller } = require('../../controllers');

const router = express.Router();

router
    .route('/')
    .get(auth, controller.list)
    .post(auth, validate(validation.create), controller.create)
    .all(methodNotAllowed);

module.exports = router;
