const { Brand } = require('../models');
const BaseService = require('./base.service');

class BrandService extends BaseService {
    constructor() {
        super(Brand);
    }
}

module.exports = new BrandService();