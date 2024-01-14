const router = require("express").Router();
const { create, get } = require("../controllers/AboutSectionController");

router.post("/create", create);
router.get("/get", get);

module.exports = router;
