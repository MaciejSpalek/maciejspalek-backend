"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPostsAmount = exports.getList = exports.updateOne = exports.deleteOne = exports.getOne = exports.createOne = void 0;
const Post_1 = __importDefault(require("../model/Post"));
const createOne = async (req, res) => {
    try {
        const post = new Post_1.default(req.body);
        await post.save();
        res.send({ status: 200, message: "Sucessfully created" });
    }
    catch (error) {
        res.send({ status: 400, message: error });
    }
};
exports.createOne = createOne;
const getOne = async (req, res) => {
    try {
        const post = await Post_1.default.findById(req.params.id);
        res.status(200).send({ data: post, status: 200 });
    }
    catch (error) {
        res.send({ status: 400, message: error });
    }
};
exports.getOne = getOne;
const deleteOne = async (req, res) => {
    try {
        const id = req.params.id;
        await Post_1.default.findByIdAndDelete(id);
        res.send({ status: 200, message: "Sucessfully deleted" });
    }
    catch (error) {
        res.send({ status: 400, message: error });
    }
};
exports.deleteOne = deleteOne;
const updateOne = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        await Post_1.default.findByIdAndUpdate(id, body);
        res.send({ status: 200, message: "Sucessfully updated" });
    }
    catch (error) {
        res.send({ status: 400, message: error });
    }
};
exports.updateOne = updateOne;
const getList = async (req, res) => {
    try {
        const { type, limit } = req.query;
        const posts = await Post_1.default.find(type ? { type } : {})
            .sort({ created_at: -1 })
            .limit(limit ? parseInt(limit) : 0);
        res.status(200).json(posts);
    }
    catch (error) {
        res.send({ status: 400, message: error });
    }
};
exports.getList = getList;
const getPostsAmount = async (req, res) => {
    try {
        const { type } = req.query;
        const postsAmount = await Post_1.default.countDocuments({ type });
        res.status(200).json(postsAmount);
    }
    catch (error) {
        res.send({ status: 400, message: error });
    }
};
exports.getPostsAmount = getPostsAmount;
