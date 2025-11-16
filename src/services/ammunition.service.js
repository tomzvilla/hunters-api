const { Ammunition } = require('../models');
const { Supplier } = require('../models');
const BaseService = require('./base.service');

class AmmunitionService extends BaseService {
    constructor() {
        super(Ammunition);
    }

    async list() {
        try {
            const ammunitions = await Ammunition.find()
                .populate({ path: 'brand', select: 'name' })
                .populate({ path: 'caliber', select: 'size' })
                .populate({ path: 'suppliers', select: 'name usdExchangeRate' })
                .populate({ path: 'ammoType', select: 'type' })
                .lean();
            const suppliers = await Supplier.find().lean();
            const ammunitionWithArg = ammunitions.map(ammo => {
                const supplierIds = ammo.suppliers.map(supplierId => supplierId.toString());
                const supplier = suppliers.find(s => supplierIds.includes(s._id.toString()));
                const unitPrice = ammo.unitPrice;
                const finalPrice = unitPrice * 1.21 * 1.05 * 1.40;
                const roundedFinalPrice = Math.round((finalPrice + Number.EPSILON) * 100) / 100;
                const argRoundedFinalPrice = Math.round(((roundedFinalPrice * supplier?.usdExchangeRate) + Number.EPSILON) * 100) / 100 ?? null;
                return {
                    ...ammo,
                    unitPrice: unitPrice,
                    finalPrice: roundedFinalPrice,
                    argPrice: argRoundedFinalPrice,
                }
            })
            return ammunitionWithArg;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new AmmunitionService();