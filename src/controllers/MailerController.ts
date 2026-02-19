import { Request, Response } from 'express';
import { transporter } from '../config/nodemailer';
import { emailForClient, getEmailHtml } from '../helpers';

interface EmailRequest {
  name: string;
  message: string;
  email: string;
}

export const send = async (req: Request, res: Response): Promise<void> => {
  const { name, message, email } = req.body as EmailRequest;

  try {
    // Message to my email
    await transporter().sendMail({
      to: "maciejspalek.art@gmail.com",
      subject: `${name} / ${email}`,
      html: getEmailHtml({ name, message }),
    });

    // Message to sender
    await transporter().sendMail({
      to: email,
      subject: "Your message has been received",
      html: getEmailHtml(emailForClient),
    });

    res.status(200).send({ message: "Successfully sent" });
  } catch (error) {
    res.status(400).send({ status: 400, message: error });
  }
};