const { Brand } = require('../models');
const { ServiceError } = require('./errors')

class BrandService {
    async getBrands() {
        const brands = await Brand.find().lean();
        return brands;
    }

    async createBrand(data) {
        const brandExists = await Brand.find({ name: data.name }).lean();
        if(brandExists.length) {
            throw new ServiceError({ code: 1409, message: 'La marca ya existe.'})
        }
        const brand = new Brand(data);
        await brand.save();
        return brand;
        
    }
}

module.exports = new BrandService();