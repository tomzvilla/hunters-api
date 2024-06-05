const BaseController = require("./base.controller");
const httpStatus = require('http-status');

const { brandService: service } = require('../services');
const { brandValidation: validation } = require('../validations');

class BrandController extends BaseController {
    constructor () {
        super(service, validation);
    }

    get methods () {
        return ['getBrands', 'createBrand'];
    }

    async _getBrands (req, res) {
        const brands = await this.service.getBrands();
        res.status(httpStatus.OK).send(brands);
    }

    async _createBrand (req, res) {
        const brand = await this.service.createBrand(req.body);
        res.status(httpStatus.OK).send(brand);
    }

    // async _updateSupplier (req, res) {
    //     await this.service.updateSupplier(req.body);
    //     res.status(httpStatus.OK).send();
    // }


}

module.exports = new BrandController();