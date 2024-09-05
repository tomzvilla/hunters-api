const express = require('express');

// middlewares
const methodNotAllowed = require('../../middlewares/methodNotAllowed');
const auth = require('../../middlewares/auth');

const { procedureStatusController: controller } = require('../../controllers');

const router = express.Router();

router
    .route('/')
    .get(auth, controller.getProcedureStatus)
    .all(methodNotAllowed);

module.exports = router;
