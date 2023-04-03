import nodemailer from "nodemailer";

export default async function sendEmail(req, res) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_KEY_PASS
    },
  });

  const { name, email, message } = req.body;

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: `${email}`,
    subject: "Salut c'est marcel",
    text: 
  `Bonjour,

    Merci de m'avoir contacté ! J'ai bien recu votre message et je vous en remercie.

    Si vous avez des questions urgentes ou des demandes spécifiques, n'hésitez pas à me contacter à nouveau en répondant à ce message.

    Merci encore de votre intérêt et j'espére pouvoir vous répondre bientôt.

    Cordialement,

    Marcel 

    Ceci est un mail automatique suite à la soumission du formulaire de contact sur le site https://sawuri-web.vercel.app/ 
    
 `,
  };

  const mailOptions2 = {
  from: email,
  to: process.env.GMAIL_USER,
  subject: 'Prise de contact depuis le site',
  text: `Bonjour Marcel vous avez recu un mail de ${name} depuis votre site web :
    ${name}:
    ${message}
  `
};
  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to send email." });
  }

  try {
    await transporter.sendMail(mailOptions2);
    res.status(200).json({ message: "Email sent successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to send email." });
  }
}
