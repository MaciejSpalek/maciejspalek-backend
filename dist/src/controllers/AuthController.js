"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyUser = exports.login = exports.register = void 0;
const User_1 = __importDefault(require("../model/User"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const helpers_1 = require("../helpers");
const register = async (req, res) => {
    const { error } = (0, helpers_1.registerValidation)(req.body);
    if (error) {
        res.status(400).send(error.details[0].message);
        return;
    }
    const nameExist = await User_1.default.findOne({ name: req.body.name });
    if (nameExist) {
        res.status(400).send("Name already exists");
        return;
    }
    const salt = await bcryptjs_1.default.genSalt(10);
    const hashedPassword = await bcryptjs_1.default.hash(req.body.password, salt);
    const user = new User_1.default({
        name: req.body.name,
        password: hashedPassword,
    });
    try {
        const savedUser = await user.save();
        const token = jsonwebtoken_1.default.sign({ _id: user._id }, process.env.TOKEN_SECRET, {
            expiresIn: Number(process.env.TOKEN_LIFE_TIME),
        });
        res.header("auth-token", token).status(200).send({
            name: savedUser.name,
            token,
            tokenLifeTime: +process.env.TOKEN_LIFE_TIME,
        });
    }
    catch (error) {
        res.status(400).send(error);
    }
};
exports.register = register;
const login = async (req, res) => {
    const validationErrors = (0, helpers_1.loginValidation)(req.body);
    if (validationErrors) {
        res.status(422).send(validationErrors);
        return;
    }
    const user = await User_1.default.findOne({ name: req.body.name });
    if (!user) {
        res.status(422).send({ name: "Name is not found" });
        return;
    }
    const validPass = await bcryptjs_1.default.compare(req.body.password, user.password);
    if (!validPass) {
        res.status(422).send({ password: "Invalid password" });
        return;
    }
    const token = jsonwebtoken_1.default.sign({ _id: user._id }, process.env.TOKEN_SECRET, {
        expiresIn: Number(process.env.TOKEN_LIFE_TIME),
    });
    res.header("auth-token", token).status(200).send({
        tokenLifeTime: +process.env.TOKEN_LIFE_TIME,
        name: req.body.name,
        token,
    });
};
exports.login = login;
const verifyUser = async (req, res) => {
    try {
        const user = await User_1.default.findById(req.user._id);
        if (!user) {
            res.status(401).json({ isAuthenticated: false });
            return;
        }
        res.status(200).json({
            isAuthenticated: true,
            user,
        });
    }
    catch (error) {
        res.status(500).json({ isAuthenticated: false });
    }
};
exports.verifyUser = verifyUser;
