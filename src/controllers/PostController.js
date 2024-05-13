const Post = require("../model/Post");

exports.createOne = async (req, res) => {
  try {
    const post = new Post(req.body);
    await post.save();
    res.send({ status: 200, message: "Sucessfully created" });
  } catch (error) {
    res.send({ status: 400, message: error });
  }
};

exports.deleteOne = async (req, res) => {
  try {
    const id = req.params.id;
    await Post.findByIdAndDelete(id);
    res.send({ status: 200, message: "Sucessfully deleted" });
  } catch (error) {
    res.send({ status: 400, message: error });
  }
};

exports.updateOne = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;

    await Post.findByIdAndUpdate(id, body);
    res.send({ status: 200, message: "Sucessfully updated" });
  } catch (error) {
    res.send({ status: 400, message: error });
  }
};

exports.getList = async (req, res) => {
  try {
    const { type, limit } = req.query;
    const posts = await Post.find(type ? { type } : {}).limit(limit);
    res.status(200).json(posts);
  } catch (error) {
    res.send({ status: 400, message: error });
  }
};

exports.getPostsAmount = async (req, res) => {
  try {
    const { type } = req.query;
    const postsAmount = await Post.countDocuments({ type });
    res.status(200).json(postsAmount);
  } catch (error) {
    res.send({ status: 400, message: error });
  }
};
