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
    subject: "test site web",
    text: `${name} (${email}) says: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to send email." });
  }
}
