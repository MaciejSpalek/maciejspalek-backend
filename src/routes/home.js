const router = require("express").Router();
const { create, get } = require("../controllers/HomeController");
const verifyToken = require("../middleware/verifyToken");

router.put("/create", verifyToken, create);
router.get("/get", get);

module.exports = router;
