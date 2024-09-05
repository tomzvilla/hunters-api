const { ProcedureStatus } = require('../models');

class ProcedureStatusService {
    async getProcedureStatus() {
        const procedureStatus = await ProcedureStatus.find().lean();
        return procedureStatus;
    }
}

module.exports = new ProcedureStatusService();