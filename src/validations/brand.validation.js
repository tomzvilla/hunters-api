const Joi = require('../utils/joi');

const create = {
    body: Joi.object().keys({
        name: Joi.string().required(),
    }),
};

const update = {
    params: Joi.object().keys({
        brandId: Joi.string().required(),
    }),
    body: Joi.object().keys({
        name: Joi.string().required(),
    }),
};

module.exports = {
    create,
    update,
};
