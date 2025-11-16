const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const auditPlugin = require('./plugins/audit.plugin');

const CaliberSchema = new Schema({
    size: { type: String, required: true },
}, { collection: "calibers" });

CaliberSchema.plugin(auditPlugin);

module.exports = mongoose.model('Caliber', CaliberSchema);