const Joi = require('../utils/joi');

const authenticationParameters = {
    body: Joi.object().keys({
        userName: Joi.string().required(),
        password: Joi.string().required(),
    }),
};

module.exports = {
    authenticationParameters,
};
