const BaseController = require("./base.controller");
const httpStatus = require('http-status');

const { ammunitionService: service } = require('../services');
const { ammunitionValidation: validation } = require('../validations');

class AmmunitionController extends BaseController {
    constructor () {
        super(service, validation);
    }

    get methods () {
        return ['getAmmunitions', 'createAmmunition'];
    }

    async _getAmmunitions (req, res) {
        const ammunitions = await this.service.getAmmunitions();
        res.status(httpStatus.OK).send(ammunitions);
    }

    async _createAmmunition (req, res) {
        const ammunition = await this.service.createAmmunition(req.body);
        res.status(httpStatus.CREATED).send(ammunition);
    }

}

module.exports = new AmmunitionController();