const BaseController = require("./base.controller");
const httpStatus = require('http-status');

const { supplierService: service } = require('../services');
const { supplierValidation: validation } = require('../validations');

class SupplierController extends BaseController {
    constructor () {
        super(service, validation);
    }

    get methods () {
        return ['getSuppliers', 'updateSupplier'];
    }

    async _getSuppliers (req, res) {
        const suppliers = await this.service.getSuppliers();
        res.status(httpStatus.OK).send(suppliers);
    }

    async _updateSupplier (req, res) {
        await this.service.updateSupplier(req.body);
        res.status(httpStatus.OK).send();
    }


}

module.exports = new SupplierController();