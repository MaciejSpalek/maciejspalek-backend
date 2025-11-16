const router = require("express").Router();
const { getList, createOne, getOne, deleteOne, updateOne, getPostsAmount } = require("../controllers/PostController");
const verifyToken = require("../middleware/verifyToken");

router.get("/list", getList);
router.get("/amount", getPostsAmount);
router.post("/create", verifyToken, createOne);
router.get("/:id", getOne);
router.put("/update/:id", verifyToken, updateOne);
router.delete("/delete/:id", verifyToken, deleteOne);

module.exports = router;
