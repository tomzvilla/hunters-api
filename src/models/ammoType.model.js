const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AmmoTypeSchema = new Schema({
    name: { type: String, required: true },
}, { collection: "ammotypes" });

module.exports = mongoose.model('AmmoType', AmmoTypeSchema);