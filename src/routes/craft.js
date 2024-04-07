const router = require("express").Router();
const { getAll, createOrUpdate, getOne } = require("../controllers/CraftController");

router.put("/create-or-update", createOrUpdate);
router.get("/get-all", getAll);
router.get("/get/:type", getOne);

module.exports = router;
