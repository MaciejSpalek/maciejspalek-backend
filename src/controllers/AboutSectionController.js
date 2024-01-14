const AboutSection = require("../model/AboutSection");

exports.create = async (req, res) => {
  const aboutSection = new AboutSection({
    description: req.body.description,
  });

  try {
    const savedAboutSection = await aboutSection.save();
    res.send(savedAboutSection);
  } catch (error) {
    res.send(error);
  }
};

exports.get = async (_, res) => {
  const aboutSection = await AboutSection.find({});
  res.json(aboutSection);
};
