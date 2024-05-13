const Craft = require("../model/Craft");

exports.createOrUpdate = async (req, res) => {
  try {
    req.body.crafts.forEach(async (craftBody) => {
      const { _id: id } = craftBody || {};

      if (id) {
        await Craft.findByIdAndUpdate(id, craftBody);
      } else {
        const craft = new Craft(craftBody);
        await craft.save();
      }
    });

    res.send({ status: 200, message: "Sucessfully updated" });
  } catch (error) {
    res.send({ status: 400, message: error });
  }
};

exports.getAll = async (_, res) => {
  const craft = await Craft.find({});
  res.json(craft);
};

exports.getOne = async (req, res) => {
  try {
    const type = req.params.type;
    const [craft] = await Craft.find({ type });
    res.send(craft);
  } catch (error) {
    res.json(error);
  }
};
