const express = require('express');

// middlewares
const methodNotAllowed = require('../../middlewares/methodNotAllowed');
const auth = require('../../middlewares/auth');

const { procedureTypeController: controller } = require('../../controllers');

const router = express.Router();

router
    .route('/')
    .get(auth, controller.getProcedureTypes)
    .all(methodNotAllowed);

module.exports = router;
