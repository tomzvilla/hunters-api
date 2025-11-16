const BaseController = require("./base.controller");
const httpStatus = require('http-status');

const { procedureService: service } = require('../services');

class ProcedureController extends BaseController {
    constructor () {
        super(service, {});
    }

    get methods () {
        return ['getProcedures', 'createProcedure'];
    }

    async _getProcedures (req, res) {
        const procedures = await this.service.getProcedures();
        res.status(httpStatus.OK).send(procedures);
    }

    async _createProcedure (req, res) {
        const procedure = await this.service.createProcedure(req.body, req.userId);
        res.status(httpStatus.CREATED).send(procedure);
    }

}

module.exports = new ProcedureController();