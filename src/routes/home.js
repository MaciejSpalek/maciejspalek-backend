const router = require("express").Router();
const { create, get } = require("../controllers/HomeController");

router.put("/create", create);
router.get("/get", get);

module.exports = router;
