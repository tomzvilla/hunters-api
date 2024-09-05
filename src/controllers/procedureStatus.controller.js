const BaseController = require("./base.controller");
const httpStatus = require('http-status');

const { procedureStatusService: service } = require('../services');

class ProcedureStatusController extends BaseController {
    constructor () {
        super(service, {});
    }

    get methods () {
        return ['getProcedureStatus'];
    }

    async _getProcedureStatus (req, res) {
        const procedureStatus = await this.service.getProcedureStatus();
        res.status(httpStatus.OK).send(procedureStatus);
    }

}

module.exports = new ProcedureStatusController();