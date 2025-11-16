const { Supplier } = require('../models');
const BaseService = require('./base.service');

class SupplierService extends BaseService {
    constructor() {
        super(Supplier);
    }
}

module.exports = new SupplierService();