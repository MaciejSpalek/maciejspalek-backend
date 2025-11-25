import Joi from '@hapi/joi';

interface UserData {
  name: string;
  password: string;
}

interface BlockData {
  type: string;
  description: string;
  image?: string | null;
  title?: string | null;
}

interface ArticleData {
  description: string;
  image: string;
  summary: string;
  title: string;
  blocks: BlockData[];
}

interface ValidationErrors {
  [key: string]: string;
}

export const registerValidation = (data: UserData): Joi.ValidationResult => {
  return Joi.object({
    name: Joi.string().min(3).max(15).required(),
    password: Joi.string().min(6).max(100).required(),
  }).validate(data);
};

export const loginValidation = (data: UserData): ValidationErrors | null => {
  const { error } = Joi.object({
    name: Joi.string().min(3).max(15).required(),
    password: Joi.string().min(6).max(100).required(),
  }).validate(data, { abortEarly: false });

  if (!error) return null;

  const errors: ValidationErrors = {};

  error.details.forEach((detail) => {
    const key = detail.context?.key;

    if (typeof key === "string") {
      errors[key] = detail.message;
    }
  });

  return errors;
};

export const articleValidation = (data: ArticleData): ValidationErrors | null => {
  const { error } = Joi.object({
    description: Joi.string().min(3).required(),
    image: Joi.string().required(),
    summary: Joi.string().min(3).max(1000).required(),
    title: Joi.string().min(3).max(1000).required(),
    blocks: Joi.array().items({
      type: Joi.string().required(),
      description: Joi.string().min(3).max(1000).required(),
      image: Joi.string().allow(null, ""),
      title: Joi.string().allow(null, ""),
    }).required(),
  }).validate(data, { abortEarly: false });

  if (!error) return null;

  const errors: ValidationErrors = {};

  error.details.forEach((detail) => {
    const key = detail.context?.key;

    if (typeof key === "string") {
      errors[key] = detail.message;
    }
  });

  return errors;
};
