"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAll = exports.deleteOne = exports.updateOne = exports.getOne = exports.createOne = void 0;
const helpers_1 = require("../helpers");
const Article_1 = __importDefault(require("../model/Article"));
const createOne = async (req, res) => {
    try {
        const article = new Article_1.default(req.body);
        const validationErrors = (0, helpers_1.articleValidation)(req.body);
        if (validationErrors) {
            res.status(422).send({ status: 422, errors: validationErrors });
            return;
        }
        await article.save();
        res.send({ status: 200, message: "Successfully created" });
    }
    catch (error) {
        res.send({ status: 400, message: error });
    }
};
exports.createOne = createOne;
const getOne = async (req, res) => {
    try {
        const id = req.params.id;
        const article = await Article_1.default.findById(id);
        res.status(200).send({ data: article, status: 200 });
    }
    catch (error) {
        res.status(400).send({ status: 400, message: error });
    }
};
exports.getOne = getOne;
const updateOne = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        await Article_1.default.findByIdAndUpdate(id, body);
        res.status(200).send({ status: 200, message: "Successfully updated" });
    }
    catch (error) {
        res.status(400).send({ status: 400, message: error });
    }
};
exports.updateOne = updateOne;
const deleteOne = async (req, res) => {
    try {
        const id = req.params.id;
        await Article_1.default.findByIdAndDelete(id);
        res.status(200).send({ status: 200, message: "Successfully deleted" });
    }
    catch (error) {
        res.status(400).send({ status: 400, message: error });
    }
};
exports.deleteOne = deleteOne;
const getAll = async (req, res) => {
    try {
        const articles = await Article_1.default.find()
            .sort({ created_at: -1 })
            .limit(req.query.limit ? parseInt(req.query.limit) : 10);
        res.status(200).json(articles);
    }
    catch (error) {
        res.status(400).send({ status: 400, message: error });
    }
};
exports.getAll = getAll;
