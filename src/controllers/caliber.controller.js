const BaseController = require("./base.controller");
const httpStatus = require('http-status');

const { caliberService: service } = require('../services');
const { caliberValidation: validation } = require('../validations');

class CaliberController extends BaseController {
    constructor () {
        super(service, validation);
    }

}

module.exports = new CaliberController();