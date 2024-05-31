/*********************************/
/*        Configuración          */
/*********************************/

const dotenv = require('dotenv');
const path = require('path');
const Joi = require('joi');

dotenv.config({ path: path.join(__dirname, '../../.env') });

const envVarsSchema = Joi.object()
    .keys({
        NODE_ENV: Joi.string().valid('production', 'development', 'test').required(),
        PORT: Joi.number().default(3000),
        URL: Joi.string().required(),
        NAME: Joi.string(),

        DB_USERNAME: Joi.string().default(''),
        DB_PASSWORD: Joi.string(),
        DB_DATABASE: Joi.string().required(),
        DB_HOST: Joi.string().required(),
        DB_PORT: Joi.string().required(),

        JWT_SECRET: Joi.string().required(),
        JWT_REFRESH: Joi.string().required(),

        ALLOWED_ORIGINS: Joi.string(),

    })
    .unknown();

const { value: envVars, error } = envVarsSchema.prefs({ errors: { label: 'key' } }).validate(process.env);

if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}

const isProd = envVars.NODE_ENV === 'production';

let config = {
    env: envVars.NODE_ENV,
    isProd,
    name: envVars.NAME,
    url: envVars.URL,
    port: envVars.PORT,
    db: {
        username: envVars.DB_USERNAME,
        password: envVars.DB_PASSWORD,
        database: envVars.DB_DATABASE,
        host: envVars.DB_HOST,
        port: envVars.DB_PORT,
    },
    jwt: {
        secret: envVars.JWT_SECRET,
        refresh: envVars.JWT_REFRESH,
    },
    allowedOrigins: envVars.ALLOWED_ORIGINS,
};

module.exports = config;

