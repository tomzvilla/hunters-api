const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const auditPlugin = require('./plugins/audit.plugin');

const SubtypeSchema = new Schema({
    code: { type: String, required: true },
    name: { type: String, required: true },
    description: { type: String, required: false }
  }, { _id: false });

const ProcedureTypeSchema = new Schema({
    code: { type: String, required: true },
    name: { type: String, required: false },
    subtypes: [SubtypeSchema]
}, { usePushEach: true, collection: "procedureTypes" });

ProcedureTypeSchema.plugin(auditPlugin);

module.exports = mongoose.model('ProcedureType', ProcedureTypeSchema);