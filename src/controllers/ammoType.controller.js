const BaseController = require("./base.controller");

const { ammoTypeService: service } = require('../services');
const { ammoTypeValidation: validation } = require('../validations');

class AmmoTypeController extends BaseController {
    constructor () {
        super(service, validation);
    }
}

module.exports = new AmmoTypeController();