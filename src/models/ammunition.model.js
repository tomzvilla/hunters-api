const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const auditPlugin = require('./plugins/audit.plugin');

const AmmunitionSchema = new Schema({
    brand: { type: Schema.Types.ObjectId, ref: 'Brand', required: true },
    caliber: { type: Schema.Types.ObjectId, ref: 'Caliber', required: true },
    ammoType: { type: Schema.Types.ObjectId, ref: 'AmmoType', required: true },
    description: { type: String, required: true },
    grammage: { type: Number, required: true },
    amountPerBox: { type: Number, required: true },
    unitPrice: { type: Number, required: true },
    suppliers: { type: Array, required: true },
}, { usePushEach: true, collection: "ammunitions" });

AmmunitionSchema.plugin(auditPlugin);

module.exports = mongoose.model('Ammunition', AmmunitionSchema);