const router = require("express").Router();
const { getList, createOne, getOne, deleteOne, updateOne, getPostsAmount } = require("../controllers/PostController");

router.get("/list", getList);
router.get("/amount", getPostsAmount);
router.post("/create", createOne);
router.get("/:id", getOne);
router.put("/update/:id", updateOne);
router.delete("/delete/:id", deleteOne);

module.exports = router;
