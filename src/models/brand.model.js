const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const auditPlugin = require('./plugins/audit.plugin');

const BrandSchema = new Schema({
    name: { type: String, required: true },
}, { collection: "brands" });

BrandSchema.plugin(auditPlugin);

module.exports = mongoose.model('Brand', BrandSchema);