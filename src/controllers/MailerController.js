const getEmailHtml = require("../../helpers");
const transporter = require("../config/nodemailer");

exports.send = async (req, res) => {
  const { name, message, email } = req.body;

  try {
    await transporter.sendMail({
      to: "maciejspalek.art@gmail.com",
      subject: name,
      html: getEmailHtml({ email, name, message }),
    });

    res.status(200).send({ message: "Successfully sended" });
  } catch (error) {
    res.status(400).send({ status: 400, message: error });
  }
};
