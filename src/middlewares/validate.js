const Joi = require('joi');
const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../controllers/ApiError');

const validate = (schema) => (req, res, next) => {
    const validSchema = pick(schema, ['params', 'query', 'body']);
    const object = pick(req, Object.keys(validSchema));
    const { value, error } = Joi.compile(validSchema)
        .prefs({ errors: { label: 'key' } })
        .validate(object, {
            abortEarly: false
        });

    if (error) {
        let details = error.details.map((error, i) => (
            {
                code: '400',
                name: error.context.label,
                message: error.type === 'custom' ? error.message : error.type
            }));
        return next(new ApiError(httpStatus.BAD_REQUEST, 'validationError', details));
    }
    Object.assign(req, value);
    return next();
};

module.exports = validate;
