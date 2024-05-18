const catchAsync = require('../utils/catchAsync')

class BaseController {
    constructor (service, validation) {
        this.service = service;
        this.validation = validation;
        this.methods.forEach(k => { this[k] = catchAsync(this[`_${k}`].bind(this)); });
    }

    get methods () {
        const baseMethods = [''];
        return [...baseMethods, ...this.customMethods];
    }

    get customMethods () {
        return [];
    }
}

module.exports = BaseController;

