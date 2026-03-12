"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const HomeController_1 = require("../controllers/HomeController");
const verifyToken_1 = __importDefault(require("../middleware/verifyToken"));
const router = (0, express_1.Router)();
router.put("/create", verifyToken_1.default, HomeController_1.create);
router.get("/get", HomeController_1.get);
exports.default = router;
