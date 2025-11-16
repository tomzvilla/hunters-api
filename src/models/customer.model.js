const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const auditPlugin = require('./plugins/audit.plugin');

const CustomerSchema = new Schema({
    fullname: { type: String, required: true },
    documentNumber: { type: Number, required: true },
    address: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: Number, required: true },
}, { usePushEach: true, collection: "customers" });

CustomerSchema.plugin(auditPlugin);

module.exports = mongoose.model('Customer', CustomerSchema);