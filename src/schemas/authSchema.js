import joi from 'joi';

const signUp_Schema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    repeat_password: joi.ref('password')
});

const signIn_Schema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
});

export { signUp_Schema, signIn_Schema };