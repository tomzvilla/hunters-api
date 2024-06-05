const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CaliberSchema = new Schema({
    size: { type: String, required: true },
}, { collection: "calibers" });

module.exports = mongoose.model('Caliber', CaliberSchema);