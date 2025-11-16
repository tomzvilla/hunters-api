const BaseController = require("./base.controller");
const httpStatus = require('http-status');

const { brandService: service } = require('../services');
const { brandValidation: validation } = require('../validations');

class BrandController extends BaseController {
    constructor () {
        super(service, validation);
    }
}

module.exports = new BrandController();