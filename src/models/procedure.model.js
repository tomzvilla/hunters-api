const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const StatusChangeSchema = new Schema({
    statusId: { type: Schema.Types.ObjectId, ref: 'ProcedureStatus', required: true },
    changedAt: { type: Date, default: Date.now },
    changedBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
});

const ProcedureSchema = new Schema({
    customerId: { type: Schema.Types.ObjectId, ref: 'Customer', required: true },
    procedureType: { type: Schema.Types.ObjectId, ref: 'ProcedureType', required: true },
    procedureSubtype: { type: String, required: true },
    description: { type: String, required: true },
    status: [StatusChangeSchema]
}, { usePushEach: true, collection: "procedures" });

module.exports = mongoose.model('Procedure', ProcedureSchema);