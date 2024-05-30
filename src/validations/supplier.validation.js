const Joi = require('../utils/joi');

const supplierParameters = {
    body: Joi.object().keys({
        _id: Joi.string().required(),
        usdExchangeRate: Joi.number(),
    }),
};

module.exports = {
    supplierParameters,
};
