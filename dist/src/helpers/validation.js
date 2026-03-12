"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.articleValidation = exports.loginValidation = exports.registerValidation = void 0;
const joi_1 = __importDefault(require("@hapi/joi"));
const registerValidation = (data) => {
    return joi_1.default.object({
        name: joi_1.default.string().min(3).max(15).required(),
        password: joi_1.default.string().min(6).max(100).required(),
    }).validate(data);
};
exports.registerValidation = registerValidation;
const loginValidation = (data) => {
    const { error } = joi_1.default.object({
        name: joi_1.default.string().min(3).max(15).required(),
        password: joi_1.default.string().min(6).max(100).required(),
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
exports.loginValidation = loginValidation;
const articleValidation = (data) => {
    const { error } = joi_1.default.object({
        description: joi_1.default.string().min(3).required(),
        image: joi_1.default.string().required(),
        summary: joi_1.default.string().min(3).max(1000).required(),
        title: joi_1.default.string().min(3).max(1000).required(),
        blocks: joi_1.default.array().items({
            type: joi_1.default.string().required(),
            description: joi_1.default.string().min(3).max(1000).required(),
            image: joi_1.default.string().allow(null, ""),
            title: joi_1.default.string().allow(null, ""),
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
exports.articleValidation = articleValidation;
