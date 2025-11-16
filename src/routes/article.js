const router = require("express").Router();
const { createOne, getOne, updateOne, deleteOne, getAll  } = require("../controllers/ArticleController");
const verifyToken = require("../middleware/verifyToken");

router.get("/list", getAll);
router.post("/create",verifyToken, createOne);
router.get("/:id", getOne);
router.put("/:id", verifyToken, updateOne);
router.delete("/:id", verifyToken, deleteOne);

module.exports = router;