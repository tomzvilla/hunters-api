const { Procedure } = require('../models');

class ProcedureService {
    async getProcedures() {
        const procedures = await Procedure.find().lean();
        return procedures;
    }

    async createProcedure(procedure, userId) {
        return await Procedure.createWithUser(procedure, userId);
    }
}

module.exports = new ProcedureService();