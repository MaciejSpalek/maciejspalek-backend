const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (_, _, cb) {
    cb(null, "images/");
  },
  filename: function (_, file, cb) {
    cb(null, file.originalname);
  },
});

module.exports = multer({ storage }).single("file");
