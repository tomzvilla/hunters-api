const { ProcedureType } = require('../models');
const { ServiceError } = require('./errors')

class ProcedureTypeService {
    async getProcedureTypes() {
        const procedureTypes = await ProcedureType.find().lean();
        return procedureTypes;
    }

}

module.exports = new ProcedureTypeService();