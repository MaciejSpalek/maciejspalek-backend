"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const connection = async () => {
    try {
        const connectionParams = {
            auth: {
                username: process.env.MONGO_DB_USER,
                password: process.env.MONGO_DB_PASSWORD,
            }
        };
        await mongoose_1.default.connect(process.env.MONGO_DB_URL, connectionParams);
        console.log("Connected to database");
    }
    catch (error) {
        console.log("Could not connect to database, error: ", error);
    }
};
exports.connection = connection;
