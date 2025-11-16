const Joi = require('../utils/joi');

const create = {
    body: Joi.object().keys({
        type: Joi.string().required(),
    }),
};

const update = {
    params: Joi.object().keys({
        ammoTypeId: Joi.string().required(),
    }),
    body: Joi.object().keys({
        type: Joi.string().required(),
    }),
};

module.exports = {
    create,
    update,
};
