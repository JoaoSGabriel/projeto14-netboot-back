import joi from "joi";

const userSchema = joi.object({
  name: joi.string().trim().min(1).required(),
  email: joi.email().required(),
});

const cartSchema = joi.object({
  name: joi.string().trim().min(1).required(),
  price: joi.number().required(),
  brand: joi.string().trim().min(1).required(),
  size: joi.number().required(),
  description: joi.string().trim().min(1).required(),
  URLimage: joi.string().uri().required(),
});

const bankSchema = joi.object({
  number: joi.number().integer().required(),
  name: joi.string().trim().min(1).required(),
  date: joi.string().trim().min(1).required(),
  cvv: joi.string().trim().min(1).required(),
});

const adressSchema = joi.object({
  country: joi.string().trim().required(),
  numberPhone: joi.number().integer().required(),
  cep: joi.number().integer().required(),
  adress: joi.string().trim().min(1).required(),
  adressNumber: joi.number().integer().required(),
  complement: joi.string().trim().min(1).required(),
  district: joi.string().trim().min(1).required(),
  city: joi.string().trim().min(1).required(),
  state: joi.string().trim().min(1).required(),
});

export { userSchema, cartSchema, bankSchema, adressSchema };
