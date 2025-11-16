const { Caliber } = require('../models');
const BaseService = require('./base.service');

class CaliberService extends BaseService {
    constructor() {
        super(Caliber);
    }
}

module.exports = new CaliberService();