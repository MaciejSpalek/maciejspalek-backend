const getEmailHtml = require("../helpers/email");
const transporter = require("../config/nodemailer");

exports.send = async (req, res) => {
  const { name, message, email } = req.body;

  try {
    await transporter.sendMail({
      to: "maciejspalek.art@gmail.com",
      subject: name,
      html: getEmailHtml({ name, message }),
    });

    const emailForClient = {
      name: "Maciej Spałek",
      message:
        "Good morning, thank you very much for reaching out. I will do my best to respond as soon as possible. Best regards.",
    };

    await transporter.sendMail({
      to: email,
      subject:
        "Your message has been received",
      html: getEmailHtml(emailForClient),
    });

    res.status(200).send({ message: "Successfully sended" });
  } catch (error) {
    res.status(400).send({ status: 400, message: error });
  }
};
