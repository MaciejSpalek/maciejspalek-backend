const { upload } = require("../controllers/ImageController");
const uploadMiddleware = require("../middleware/upload");
const router = require("express").Router();

router.post("/upload", uploadMiddleware, upload);

module.exports = router;
