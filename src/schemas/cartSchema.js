import joi from "joi";

const cartSchema = joi.object({
  id: joi.string().trim().min(1).required(),
  name: joi.string().trim().min(1).required(),
  price: joi.number().required(),
  brand: joi.string().trim().min(1).required(),
  description: joi.string().trim().min(1).required(),
  size: joi.number().integer().required(),
  URLimage: joi.string().uri().required(),
  qt: joi.number().integer().required(),
});

export { cartSchema };
