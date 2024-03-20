const Home = require("../model/Home");

exports.create = async (req, res) => {
  try {
    const checkedHome = await Home.countDocuments();

    if (!checkedHome) {
      const home = new Home(req.body);
      await home.save();
      res.send({ status: 200, message: "Sucessfully added" });
    } else {
      await Home.updateOne({}, req.body)
      res.send({ status: 200, message: "Sucessfully added" });
    }
  } catch (error) {
    res.send(error);
  }
};

exports.get = async (_, res) => {
  const home = await Home.find({});
  res.json(home);
};
