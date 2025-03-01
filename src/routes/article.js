const router = require("express").Router();
const { createOne, getOne, updateOne, deleteOne, getAll  } = require("../controllers/ArticleController");

router.get("/:id", getOne);
router.post("/create", createOne);
router.put("/:id", updateOne);
router.delete("/:id", deleteOne);
router.get("/list", getAll);

module.exports = router;