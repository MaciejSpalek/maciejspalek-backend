"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CraftController_1 = require("../controllers/CraftController");
const verifyToken_1 = __importDefault(require("../middleware/verifyToken"));
const router = (0, express_1.Router)();
router.put("/create-or-update", verifyToken_1.default, CraftController_1.createOrUpdate);
router.get("/get-all", CraftController_1.getAll);
router.get("/get/:type", CraftController_1.getOne);
exports.default = router;
