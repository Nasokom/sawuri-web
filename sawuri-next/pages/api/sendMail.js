import nodemailer from "nodemailer";
const fs =  require('fs-extra')

export default async function sendEmail(req, res) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_KEY_PASS
    },
  });

  const { name, email, message,phone } = req.body;

  const templateFile = await fs.readFile('public/mailTemplate/emailClient.html', 'utf-8');

  const emailHtml = templateFile
                    .replace('{name}',name)

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: `${email}`,
    subject: "Salut c'est marcel",
    text: 'Merci pour la venu sur mon site web',
    html : emailHtml,
  };

  const mailOptions2 = {
  from: email,
  to: process.env.GMAIL_USER,
  subject: 'Prise de contact depuis le site',
  text: `Bonjour Marcel vous avez recu un mail de ${name} depuis votre site web :
    ${name}:
    ${message}
    ${phone && `Voici son numero de telephone pour le contacter : ${phone}` }
  `
};

try {
  await transporter.sendMail(mailOptions);
  await transporter.sendMail(mailOptions2);
  res.status(200).json({ message: "Emails sent successfully." });
} catch (error) {
  console.error(error);
  res.status(500).json({ message: "Failed to send emails." });
}
}
