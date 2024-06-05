const Joi = require('../utils/joi');

const caliberParameters = {
    body: Joi.object().keys({
        size: Joi.string().required(),
    }),
};

module.exports = {
    caliberParameters,
};
