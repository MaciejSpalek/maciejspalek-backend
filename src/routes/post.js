const router = require("express").Router();
const { getList, createOne, deleteOne, updateOne } = require("../controllers/PostController");

router.get("/list", getList);
router.post("/create", createOne);
router.put("/update/:id", updateOne);
router.delete("/delete/:id", deleteOne);

module.exports = router;
