const mongoose = require('mongoose');

const Schema = mongoose.Schema;

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

module.exports = mongoose.model('ProcedureType', ProcedureTypeSchema);