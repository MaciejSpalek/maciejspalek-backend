exports.upload = async (req, res) => {
  try {
    const protocol = req.protocol;
    const host = req.get("host");
    const fullUrl = `${protocol}://${host}`;

    const fileUrl = `${fullUrl}/images/${req.file.originalname}`;

    res.status(200).json(fileUrl);
  } catch (error) {
    res.status(400).json(error);
  }
};

exports.deleteOne = async (req, res) => {
  try {
    await gfs.files.deleteOne({ filename: req.params.filename });
    res.send("success");
  } catch (error) {
    res.send("An error occured.");
  }
};
