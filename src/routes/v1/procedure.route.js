const express = require('express');

// middlewares
const methodNotAllowed = require('../../middlewares/methodNotAllowed');
const auth = require('../../middlewares/auth');

const { procedureController: controller } = require('../../controllers');

const router = express.Router();

router
    .route('/')
    .get(auth, controller.getProcedures)
    .post(auth, controller.createProcedure)
    .all(methodNotAllowed);

module.exports = router;
