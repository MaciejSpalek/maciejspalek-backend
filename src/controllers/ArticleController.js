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
    res.send({ status: 400, message: error });
  }
};

exports.getOne = async (req, res) => {
  try {
    const id = req.params.id;

    const article = await Article.findById(id);
    res.status(200).send({ data: article, status: 200 });
  } catch (error) {
    res.status(400).send({ status: 400, message: error });
  }
};

exports.updateOne = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;

    await Article.findByIdAndUpdate(id, body);
    res.status(200).send({ status: 200, message: "Sucessfully updated" });
  } catch (error) {
    res.status(400).send({ status: 400, message: error });
  }
};

exports.deleteOne = async (req, res) => {
  try {
    const id = req.params.id;

    await Article.findByIdAndDelete(id);
    res.status(200).send({ status: 200, message: "Sucessfully deleted" });
  } catch (error) {
    res.status(400).send({ status: 400, message: error });
  }
};

exports.getAll = async (req, res) => {
  try {
    const articles = await Article.find()
      .sort({ created_at: -1 })
      .limit(req.query.limit);
    res.status(200).json(articles);
  } catch (error) {
    res.status(400).send({ status: 400, message: error });
  }
};
