const express = require('express');

// middlewares
const methodNotAllowed = require('../../middlewares/methodNotAllowed');
const validate = require('../../middlewares/validate');
const auth = require('../../middlewares/auth');

const { customerValidation: validation } = require('../../validations');
const { customerController: controller } = require('../../controllers');

const router = express.Router();

router
    .route('/')
    .get(auth, controller.getCustomers)
    .post(auth, validate(validation.customerBody), controller.createCustomer)
    .delete(auth, validate(validation.customerBody), controller.deleteCustomer)
    .all(methodNotAllowed);

router
    .route('/:customerId')
    .delete(auth, controller.deleteCustomer)
    .all(methodNotAllowed);

module.exports = router;
