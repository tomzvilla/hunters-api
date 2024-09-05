const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const procedureStatusSchema = new Schema({
    code: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    description: { type: String, required: false },
    order: { type: Number, required: true },
    color: { type: String, required: false }
  }, { timestamps: true, collection: "states" });


module.exports = mongoose.model('ProcedureStatus', procedureStatusSchema);