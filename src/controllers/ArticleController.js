const { articleValidation } = require("../helpers/validation");
const Article = require("../model/Article");

exports.createOne = async (req, res) => {
  try {
    const article = new Article(req.body);

    const validationErrors = articleValidation(req.body);
    if (validationErrors)
      return res.status(422).send({ status: 422, errors: validationErrors });

    await article.save();
    res.send({ status: 200, message: "Sucessfully created" });
  } catch (error) {
    console.log(error);
    res.send({ status: 400, message: error });
  }
};

exports.getOne = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;

    const article = await Article.findByIdAndUpdate(id, body);
    res.send({ data: article, status: 200, message: "Sucessfully updated" });
  } catch (error) {
    res.send({ status: 400, message: error });
  }
};

exports.updateOne = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;

    await Article.findByIdAndUpdate(id, body);
    res.send({ status: 200, message: "Sucessfully updated" });
  } catch (error) {
    res.send({ status: 400, message: error });
  }
};

exports.deleteOne = async (req, res) => {
  try {
    const id = req.params.id;

    await Article.findByIdAndDelete(id);
    res.send({ status: 200, message: "Sucessfully deleted" });
  } catch (error) {
    res.send({ status: 400, message: error });
  }
};

exports.getAll = async (req, res) => {
  try {
    const { type, limit } = req.query;

    const articles = await Article.find(type ? { type } : {})
      .sort({ created_at: -1 })
      .limit(limit);
    res.status(200).json(articles);
  } catch (error) {
    res.send({ status: 400, message: error });
  }
};
