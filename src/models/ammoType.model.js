const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const auditPlugin = require('./plugins/audit.plugin');

const AmmoTypeSchema = new Schema({
    type: { type: String, required: true },
}, { collection: "ammotypes" });

AmmoTypeSchema.plugin(auditPlugin);

module.exports = mongoose.model('AmmoType', AmmoTypeSchema);