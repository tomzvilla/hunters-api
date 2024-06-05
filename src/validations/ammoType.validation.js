const Joi = require('../utils/joi');

const ammoTypeParameters = {
    body: Joi.object().keys({
        type: Joi.string().required(),
    }),
};

module.exports = {
    ammoTypeParameters,
};
