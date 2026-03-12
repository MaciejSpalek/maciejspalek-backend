"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MailerController_1 = require("../controllers/MailerController");
const router = (0, express_1.Router)();
router.post("/send", MailerController_1.send);
exports.default = router;
