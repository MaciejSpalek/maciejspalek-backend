const router = require("express").Router();
const { getList, createOne, deleteOne, updateOne, getPostsAmount } = require("../controllers/PostController");

router.get("/list", getList);
router.post("/create", createOne);
router.put("/update/:id", updateOne);
router.delete("/delete/:id", deleteOne);
router.get("/amount", getPostsAmount);

module.exports = router;
