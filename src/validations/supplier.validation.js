const Joi = require('../utils/joi');

const update = {
    params: Joi.object().keys({
        supplierId: Joi.string().required(),
    }),
    body: Joi.object().keys({
        usdExchangeRate: Joi.number(),
    }),
};

const create = {
    body: Joi.object().keys({
        name: Joi.string().required(),
        usdExchangeRate: Joi.number().required(),
    }),
};

module.exports = {
    update,
    create,
};
