"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.send = void 0;
const nodemailer_1 = require("../config/nodemailer");
const helpers_1 = require("../helpers");
const send = async (req, res) => {
    const { name, message, email } = req.body;
    try {
        // Message to my email
        await (0, nodemailer_1.transporter)().sendMail({
            to: "maciejspalek.art@gmail.com",
            subject: `${name} / ${email}`,
            html: (0, helpers_1.getEmailHtml)({ name, message }),
        });
        // Message to sender
        await (0, nodemailer_1.transporter)().sendMail({
            to: email,
            subject: "Your message has been received",
            html: (0, helpers_1.getEmailHtml)(helpers_1.emailForClient),
        });
        res.status(200).send({ message: "Successfully sent" });
    }
    catch (error) {
        res.status(400).send({ status: 400, message: error });
    }
};
exports.send = send;
