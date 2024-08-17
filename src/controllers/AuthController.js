const User = require("../model/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {
  registerValidation,
  loginValidation,
} = require("../helpers/validation");

exports.register = async (req, res) => {
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const nameExist = await User.findOne({ name: req.body.name });
  if (nameExist) return res.status(400).send("Name already exists");

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    name: req.body.name,
    password: hashedPassword,
  });

  try {
    const savedUser = await user.save();
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET, {
      expiresIn: `${process.env.TOKEN_LIFE_TIME}s`,
    });
    res.header("auth-token", token).status(200).send({
      name: savedUser.name,
      token,
      tokenLifeTime: +process.env.TOKEN_LIFE_TIME,
    });
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.login = async (req, res) => {
  const validationErrors = loginValidation(req.body);
  if (validationErrors) return res.status(422).send(validationErrors);

  const user = await User.findOne({ name: req.body.name });
  if (!user) return res.status(422).send({ name: "Name is not found" });


  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(422).send({ password: "Invalid password" });

  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET, {
    expiresIn: `${process.env.TOKEN_LIFE_TIME}s`,
  });

  res.header("auth-token", token).status(200).send({
    tokenLifeTime: +process.env.TOKEN_LIFE_TIME,
    name: req.body.name,
    token,
  });
};