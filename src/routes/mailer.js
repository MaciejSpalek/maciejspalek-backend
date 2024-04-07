const router = require("express").Router();
const { send } = require("../controllers/MailerController");

router.post("/send", send);

module.exports = router;
