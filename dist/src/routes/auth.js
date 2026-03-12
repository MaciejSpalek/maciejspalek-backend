"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AuthController_1 = require("../controllers/AuthController");
const verifyToken_1 = __importDefault(require("../middleware/verifyToken"));
const router = (0, express_1.Router)();
router.post("/register", AuthController_1.register);
router.post("/login", AuthController_1.login);
router.get("/verifyUser", verifyToken_1.default, AuthController_1.verifyUser);
exports.default = router;
