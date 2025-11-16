const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const auditPlugin = require('./plugins/audit.plugin');

const SupplierSchema = new Schema({
    name: { type: String, required: true },
    usdExchangeRate: { type: Number, required: true },
}, { collection: "suppliers" });

SupplierSchema.plugin(auditPlugin);

module.exports = mongoose.model('Supplier', SupplierSchema);