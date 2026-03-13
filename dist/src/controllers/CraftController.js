"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOne = exports.getAll = exports.createOrUpdate = void 0;
const Craft_1 = __importDefault(require("../model/Craft"));
const createOrUpdate = async (req, res) => {
    try {
        const crafts = req.body.crafts;
        for (const craftBody of crafts) {
            const { _id: id } = craftBody || {};
            if (id) {
                await Craft_1.default.findByIdAndUpdate(id, craftBody);
            }
            else {
                const craft = new Craft_1.default(craftBody);
                await craft.save();
            }
        }
        res.send({ status: 200, message: "Sucessfully updated" });
    }
    catch (error) {
        res.send({ status: 400, message: error });
    }
};
exports.createOrUpdate = createOrUpdate;
const getAll = async (_, res) => {
    try {
        const craft = await Craft_1.default.find({});
        res.json(craft);
    }
    catch (error) {
        res.status(400).json(error);
    }
};
exports.getAll = getAll;
const getOne = async (req, res) => {
    try {
        const type = req.params.type;
        const [craft] = await Craft_1.default.find({ type });
        res.send(craft);
    }
    catch (error) {
        res.json(error);
    }
};
exports.getOne = getOne;
