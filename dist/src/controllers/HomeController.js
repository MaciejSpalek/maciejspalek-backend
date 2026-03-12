"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = exports.create = void 0;
const Home_1 = __importDefault(require("../model/Home"));
const create = async (req, res) => {
    try {
        const checkedHome = await Home_1.default.countDocuments();
        if (!checkedHome) {
            const home = new Home_1.default(req.body);
            await home.save();
            res.send({ status: 200, message: "Sucessfully added" });
        }
        else {
            await Home_1.default.updateOne({}, req.body);
            res.send({ status: 200, message: "Sucessfully added" });
        }
    }
    catch (error) {
        res.send(error);
    }
};
exports.create = create;
const get = async (_, res) => {
    try {
        const home = await Home_1.default.find({});
        res.json(home);
    }
    catch (error) {
        res.status(400).json(error);
    }
};
exports.get = get;
