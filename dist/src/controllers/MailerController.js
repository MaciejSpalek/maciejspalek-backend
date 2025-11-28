import { transporter } from '../config/nodemailer';
import { emailForClient, getEmailHtml } from '../helpers';
export const send = async (req, res) => {
    const { name, message, email } = req.body;
    console.log({ name, message, email });
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
            subject: "Your message has been received",
            html: getEmailHtml(emailForClient),
        });
        res.status(200).send({ message: "Successfully sent" });
    }
    catch (error) {
        res.status(400).send({ status: 400, message: error });
    }
};
