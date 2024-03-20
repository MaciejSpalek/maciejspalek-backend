const router = require("express").Router();
const { getList, create } = require("../controllers/PostController");

router.post("/create", create);
router.get("/list", getList);

module.exports = router;
