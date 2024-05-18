const { Ammunition } = require('../models');

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
            const ammunitions = await Ammunition.find().populate('brand').populate('caliber').populate('suppliers').populate('ammoType');
            return ammunitions;
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