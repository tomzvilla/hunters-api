const BaseController = require("./base.controller");
const { ammunitionService: service } = require('../services');
const { ammunitionValidation: validation } = require('../validations');

class AmmunitionController extends BaseController {
    constructor () {
        super(service, validation);
    }
}

module.exports = new AmmunitionController();