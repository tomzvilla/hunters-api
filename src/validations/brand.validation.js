const Joi = require('../utils/joi');

const brandParameters = {
    body: Joi.object().keys({
        name: Joi.string().required(),
    }),
};

module.exports = {
    brandParameters,
};
