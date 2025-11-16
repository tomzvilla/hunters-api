const { AmmoType } = require('../models');
const BaseService = require('./base.service');

class AmmoTypeService extends BaseService {
    constructor() {
        super(AmmoType);
    }
}

module.exports = new AmmoTypeService();