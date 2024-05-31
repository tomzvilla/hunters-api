const express = require('express');

// middlewares
const methodNotAllowed = require('../../middlewares/methodNotAllowed');
const validate = require('../../middlewares/validate');
const checkRefreshToken = require('../../middlewares/checkRefreshToken');

const { authenticationValidation: validation } = require('../../validations');
const { authenticationController: controller } = require('../../controllers');

const router = express.Router();

router
    .route('/login')
    .post(validate(validation.authenticationParameters), controller.authenticate)
    .all(methodNotAllowed);

router
    .route('/refresh')
    .get(checkRefreshToken, controller.refresh)
    .all(methodNotAllowed);

router
    .route('/logout')
    .get(controller.logout)
    .all(methodNotAllowed);

module.exports = router;