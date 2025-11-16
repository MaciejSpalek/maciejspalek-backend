const router = require("express").Router();
const { getAll, createOrUpdate, getOne } = require("../controllers/CraftController");
const verifyToken = require("../middleware/verifyToken");

router.put("/create-or-update", verifyToken, createOrUpdate);
router.get("/get-all", getAll);
router.get("/get/:type", getOne);

module.exports = router;
