const router = require("express").Router();
const { createOne, getOne, updateOne, deleteOne, getAll  } = require("../controllers/ArticleController");

router.get("/list", getAll);
router.post("/create", createOne);
router.get("/:id", getOne);
router.put("/:id", updateOne);
router.delete("/:id", deleteOne);

module.exports = router;