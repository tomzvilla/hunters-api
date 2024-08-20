const Joi = require('../utils/joi');

const ammunitionParameters = {
    body: Joi.object().keys({
        brand: Joi.string().required(),
        caliber: Joi.string().required(),
        grammage: Joi.number().required(),
        ammoType: Joi.string().required(),
        amountPerBox: Joi.number().required(),
        unitPrice: Joi.number().required(),
        description: Joi.string().required(),
        suppliers: Joi.array().required(),
    }),
};

module.exports = {
    ammunitionParameters,
};
