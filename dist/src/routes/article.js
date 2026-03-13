"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ArticleController_1 = require("../controllers/ArticleController");
const verifyToken_1 = __importDefault(require("../middleware/verifyToken"));
const router = (0, express_1.Router)();
router.get("/list", ArticleController_1.getAll);
router.post("/create", verifyToken_1.default, ArticleController_1.createOne);
router.get("/:id", ArticleController_1.getOne);
router.put("/:id", verifyToken_1.default, ArticleController_1.updateOne);
router.delete("/:id", verifyToken_1.default, ArticleController_1.deleteOne);
exports.default = router;
