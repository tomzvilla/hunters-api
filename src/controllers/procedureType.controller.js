const BaseController = require("./base.controller");
const httpStatus = require('http-status');

const { procedureTypeService: service } = require('../services');

class ProcedureTypeController extends BaseController {
    constructor () {
        super(service, {});
    }

    get methods () {
        return ['getProcedureTypes'];
    }

    async _getProcedureTypes (req, res) {
        const procedureTypes = await this.service.getProcedureTypes();
        res.status(httpStatus.OK).send(procedureTypes);
    }

}

module.exports = new ProcedureTypeController();