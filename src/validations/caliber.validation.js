const Joi = require('../utils/joi');

const create = {
    body: Joi.object().keys({
        size: Joi.string().required(),
    }),
};

const update = {
    params: Joi.object().keys({
        caliberId: Joi.string().required(),
    }),
    body: Joi.object().keys({
        size: Joi.string().required(),
    }),
};

module.exports = {
    create,
    update,
};
