const Joi = require("@hapi/joi");

const registerValidation = (data) => {
  return Joi.object({
    name: Joi.string().min(3).max(15).required(),
    password: Joi.string().min(6).max(100).required(),
  }).validate(data);
};

const loginValidation = (data) => {
  const { error } = Joi.object({
    name: Joi.string().min(3).max(15).required(),
    password: Joi.string().min(6).max(100).required(),
  }).validate(data, { abortEarly: false });

  if (!error) return null;

  const errors = {};
  error.details.forEach((detail) => {
    errors[detail.context.key] = detail.message;
  });
  return errors;
};

const articleValidation = (data) => {
  const { error } = Joi.object({
    description: Joi.string().min(3).required(),
    image: Joi.string().required(),
    summary: Joi.string().min(3).max(1000).required(),
    blocks: Joi.object({
      type: Joi.string().required(),
      description: Joi.string().min(3).max(1000).required(),
      image: Joi.string().required(),
    }).required(),
  }).validate(data, { abortEarly: false });

  if (!error) return null;

  const errors = {};
  error.details.forEach((detail) => {
    errors[detail.context.key] = detail.message;
  });
  return errors;
};

module.exports = {
  registerValidation,
  loginValidation,
  articleValidation,
};
