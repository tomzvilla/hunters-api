const { Procedure } = require('../models');

class ProcedureService {
    async getProcedures() {
        const procedures = await Procedure.find().lean();
        return procedures;
    }

    async createProcedure(procedure) {
        return await Procedure.create(procedure);
    }
}

module.exports = new ProcedureService();