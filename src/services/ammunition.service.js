const { Ammunition } = require('../models');
const { Supplier } = require('../models');
class AmmunitionService {
    async createAmmunition(data) {
        try {
            const ammunition = new Ammunition(data);
            await ammunition.save();
            return ammunition;
        } catch (error) {
            throw error;
        }
    }

    async getAmmunitions() {
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
                return {
                    ...ammo,
                    argPrice: (ammo.unitPrice * supplier?.usdExchangeRate) ?? null
                }
            })
            return ammunitionWithArg;
        } catch (error) {
            throw error;
        }
    }

    async getAmmunitionById(id) {
        try {
            return await Ammunition.findById(id).populate('brand').populate('caliber');
        } catch (error) {
            throw error;
        }
    }

    async updateAmmunition(id, data) {
        try {
            return await Ammunition.findByIdAndUpdate(id, data, { new: true }).populate('brand').populate('caliber');
        } catch (error) {
            throw error;
        }
    }

    async deleteAmmunition(id) {
        try {
            return await Ammunition.findByIdAndDelete(id);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new AmmunitionService();