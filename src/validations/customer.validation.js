const Joi = require('../utils/joi');

const customerBody = {
    body: Joi.object().keys({
        fullname: Joi.string().required(),
        documentNumber: Joi.number().required(),
        address: Joi.string().required(),
        email: Joi.string().required(),
        phone: Joi.number().required(),
    }),
};

module.exports = {
    customerBody,
};
