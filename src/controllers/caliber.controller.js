const BaseController = require("./base.controller");
const httpStatus = require('http-status');

const { caliberService: service } = require('../services');
const { caliberValidation: validation } = require('../validations');

class CaliberController extends BaseController {
    constructor () {
        super(service, validation);
    }

    get methods () {
        return ['getCalibers', 'createCaliber'];
    }

    async _getCalibers (req, res) {
        const calibers = await this.service.getCalibers();
        res.status(httpStatus.OK).send(calibers);
    }

    async _createCaliber (req, res) {
        const caliber = await this.service.createCaliber(req.body);
        res.status(httpStatus.OK).send(caliber);
    }

}

module.exports = new CaliberController();