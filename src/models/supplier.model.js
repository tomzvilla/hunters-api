const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SupplierSchema = new Schema({
    name: { type: String, required: true },
}, { collection: "suppliers" });

module.exports = mongoose.model('Supplier', SupplierSchema);