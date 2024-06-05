const { AmmoType } = require('../models');
const { ServiceError } = require('./errors')

class AmmoTypeService {
    async getAmmoTypes() {
        const ammoTypes = await AmmoType.find().lean();
        return ammoTypes;
    }

    async createAmmoType(data) {
        const ammoTypeExists = await AmmoType.find({ type: data.type }).lean();
        if(ammoTypeExists.length) {
            throw new ServiceError({ code: 1409, message: 'Ese tipo de munición ya existe'})
        }
        const ammoType = new AmmoType(data);
        await ammoType.save();
        return ammoType;
        
    }
}

module.exports = new AmmoTypeService();