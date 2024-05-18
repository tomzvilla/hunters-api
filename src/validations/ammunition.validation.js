const Joi = require('../utils/joi');

const ammunitionParameters = {
    body: Joi.object().keys({
        brand: Joi.string().required(),
        caliber: Joi.string().required(),
        description: Joi.string().required(),
        ammountPerBox: Joi.string().required(),
        unitPrice: Joi.string().required(),
    }),
};

module.exports = {
    ammunitionParameters,
};
