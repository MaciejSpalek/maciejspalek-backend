import multer from 'multer';

const storage = multer.diskStorage({
  destination: function (_, __, cb) {
    cb(null, "images/");
  },
  filename: function (_, file, cb) {
    cb(null, file.originalname);
  },
});

export default multer({ storage }).single("file");