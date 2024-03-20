const router = require("express").Router();
const { getAll, createOrUpdate } = require("../controllers/CraftController");

router.put("/create-or-update", createOrUpdate);
router.get("/get-all", getAll);

module.exports = router;
