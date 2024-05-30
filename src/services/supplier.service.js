const { Supplier } = require('../models');

class SupplierService {
    async getSuppliers() {
        try {
            const suppliers = await Supplier.find();
            return suppliers;
        } catch (error) {
            throw error;
        }
    }

    async updateSupplier(data) {
        try {
            const supplier = await Supplier.find({ _id: data._id});
            if(!supplier) {
                throw new Error({status: 404, message: 'Supplier not found'})
            }
            await Supplier.updateOne({ _id: data._id}, {$set: { usdExchangeRate: data.usdExchangeRate }})
        } catch (error) {
            throw error;
        }
    }

}

module.exports = new SupplierService();