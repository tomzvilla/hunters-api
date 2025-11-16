const BaseController = require("./base.controller");
const httpStatus = require('http-status');

const { supplierService: service } = require('../services');
const { supplierValidation: validation } = require('../validations');

class SupplierController extends BaseController {
    constructor () {
        super(service, validation);
    }

}

module.exports = new SupplierController();