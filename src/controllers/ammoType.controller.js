const BaseController = require("./base.controller");
const httpStatus = require('http-status');

const { ammoTypeService: service } = require('../services');
const { ammoTypeValidation: validation } = require('../validations');

class AmmoTypeController extends BaseController {
    constructor () {
        super(service, validation);
    }

    get methods () {
        return ['getAmmoTypes', 'createAmmoType'];
    }

    async _getAmmoTypes (req, res) {
        const ammoTypes = await this.service.getAmmoTypes();
        res.status(httpStatus.OK).send(ammoTypes);
    }

    async _createAmmoType (req, res) {
        const ammoType = await this.service.createAmmoType(req.body);
        res.status(httpStatus.OK).send(ammoType);
    }

    // async _updateSupplier (req, res) {
    //     await this.service.updateSupplier(req.body);
    //     res.status(httpStatus.OK).send();
    // }


}

module.exports = new AmmoTypeController();