const BaseController = require("./base.controller");
const httpStatus = require('http-status');

const { ammunitionService: service } = require('../services');
const { ammunitionValidation: validation } = require('../validations');

class AmmunitionController extends BaseController {
    constructor () {
        super(service, validation);
    }
}

module.exports = new AmmunitionController();