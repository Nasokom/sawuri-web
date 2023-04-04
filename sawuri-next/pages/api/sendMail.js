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
    //html : emailHtml,
    text : `
    Bonjour ${name}
    Merci pour votre message ! Je vous confirme que je l'ai bien reçu et je vous recontacterai dès que possible.
    En attendant, n'hésitez pas à consulter les différentes rubriques de mon site web me decouvrir .
    Si vous avez des questions urgentes ou des demandes spécifiques, n'hésitez pas à me contacter à nouveau en répondant à ce message.
    
    Cordialement,Marcel

    (Ceci est un mail automatique suite à la soumission du formulaire de contact sur mon site web   https://sawuri-web.vercel.app)
    `

  };

  const mailOptions2 = {
  from: email,
  to: process.env.GMAIL_USER,
  subject: `${name} vous a envoyé un message depuis votre siteweb`,
  text: `Bonjour Marcel vous avez recu un mail de ${name} depuis votre site web :
    voici son message:
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
