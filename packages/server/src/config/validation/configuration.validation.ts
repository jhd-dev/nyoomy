import Joi from 'joi';

const defaultPort = 4000;
const secureLength = 8;

export const configValidationSchema = Joi.object({
    nodeEnv: Joi.string()
        .valid('development', 'production', 'test', 'provision')
        .default('development'),
    __dev__: Joi.boolean(),
    __prod__: Joi.boolean(),
    __test__: Joi.boolean(),
    publicUri: Joi.string().uri().default(`http://localhost:${defaultPort}`),
    port: Joi.number().port().default(defaultPort),
    database: Joi.object({
        name: Joi.string(),
        username: Joi.string(),
        password: Joi.string().default(''),
    }),
    redis: Joi.object({
        port: Joi.number().port(),
        secret: Joi.string().token().min(secureLength),
    }),
    auth: Joi.object({
        accessTokenSecret: Joi.string().token().min(secureLength),
        google: Joi.object({
            clientId: Joi.string(),
            clientSecret: Joi.string(),
        }),
    }),
    emailTransporter: Joi.object({
        host: Joi.string().uri(),
        port: Joi.number().port(),
        name: Joi.string().optional(),
        address: Joi.string().email(),
        password: Joi.string(),
    }),
});
