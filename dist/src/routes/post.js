"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PostController_1 = require("../controllers/PostController");
const verifyToken_1 = __importDefault(require("../middleware/verifyToken"));
const router = (0, express_1.Router)();
router.get("/list", PostController_1.getList);
router.get("/amount", PostController_1.getPostsAmount);
router.post("/create", verifyToken_1.default, PostController_1.createOne);
router.get("/:id", PostController_1.getOne);
router.put("/update/:id", verifyToken_1.default, PostController_1.updateOne);
router.delete("/delete/:id", verifyToken_1.default, PostController_1.deleteOne);
exports.default = router;
