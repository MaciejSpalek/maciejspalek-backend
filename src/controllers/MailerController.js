const transporter = require("../config/nodemailer");
const {emailForClient, getEmailHtml} = require("../helpers/email");

exports.send = async (req, res) => {
  const { name, message, email } = req.body;

  try {
    // Message to my email
    await transporter.sendMail({
      to: "maciejspalek.art@gmail.com",
      subject: `${name} / ${email}`,
      html: getEmailHtml({ name, message }),
    });


    // Message to sender
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
