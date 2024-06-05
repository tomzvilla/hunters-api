const { Caliber } = require('../models');
const { ServiceError } = require('./errors')

class CaliberService {
    async getCalibers() {
        const calibers = await Caliber.find().lean();
        return calibers;
    }

    async createCaliber(data) {
        const caliberExists = await Caliber.find({ size: data.size }).lean();
        if(caliberExists.length) {
            throw new ServiceError({ code: 1409, message: 'El calibre ya existe.'})
        }
        const caliber = new Caliber(data);
        await caliber.save();
        return caliber;
        
    }
}

module.exports = new CaliberService();