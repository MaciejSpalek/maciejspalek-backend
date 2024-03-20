const Post = require("../model/Post");

exports.create = async (req, res) => {
  try {
    const craft = new Post(req.body);
    console.log(craft);
    await craft.save();
    res.send({ status: 200, message: "Sucessfully updated" });
  } catch (error) {
    res.send({ status: 400, message: error });
  }
};

exports.getList = async (_, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).json(posts);
  } catch (error) {
    res.send({ status: 400, message: error });
  }
};
