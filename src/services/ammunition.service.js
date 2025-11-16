const { Ammunition } = require('../models');
const { Supplier } = require('../models');
const { ServiceError } = require('./errors');
class AmmunitionService {
 
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

    async create(data, userId) {
        const ammo = await Ammunition.findOne({ brand: data.brand, caliber: data.caliber, ammoType: data.ammoType, grammage: data.grammage, amountPerBox: data.amountPerBox }).lean();
        if(ammo) {
            throw new ServiceError({ code: 1409, message: 'Ammunition already exists' });
        }
        return await Ammunition.createWithUser(data, userId);
    }
}

module.exports = new AmmunitionService();