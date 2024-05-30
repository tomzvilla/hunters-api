const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SupplierSchema = new Schema({
    name: { type: String, required: true },
    usdExchangeRate: { type: Number, required: true },
}, { collection: "suppliers" });

module.exports = mongoose.model('Supplier', SupplierSchema);