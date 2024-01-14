const router = require("express").Router();
const { getCraft } = require("../controllers/AboutSectionController");

router.get("/get_craft", getCraft);

module.exports = router;
