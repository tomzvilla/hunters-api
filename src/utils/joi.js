const Joi = require('joi').extend(joi => ({
    base: joi.array(),
    coerce: (value, helpers) => ({
        value: value.split ? value.split(',') : value,
    }),
    type: 'queryArray',
}));

module.exports = Joi;
