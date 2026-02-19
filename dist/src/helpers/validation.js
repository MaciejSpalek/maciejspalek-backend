import Joi from '@hapi/joi';
export const registerValidation = (data) => {
    return Joi.object({
        name: Joi.string().min(3).max(15).required(),
        password: Joi.string().min(6).max(100).required(),
    }).validate(data);
};
export const loginValidation = (data) => {
    const { error } = Joi.object({
        name: Joi.string().min(3).max(15).required(),
        password: Joi.string().min(6).max(100).required(),
    }).validate(data, { abortEarly: false });
    if (!error)
        return null;
    const errors = {};
    error.details.forEach((detail) => {
        const key = detail.context?.key;
        if (typeof key === "string") {
            errors[key] = detail.message;
        }
    });
    return errors;
};
export const articleValidation = (data) => {
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
    if (!error)
        return null;
    const errors = {};
    error.details.forEach((detail) => {
        const key = detail.context?.key;
        if (typeof key === "string") {
            errors[key] = detail.message;
        }
    });
    return errors;
};
