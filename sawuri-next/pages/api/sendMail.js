import nodemailer from "nodemailer";
import ComplexText from "@/component/Ui/ComplexText";
import { client } from "@/Utils/sanity/sanityClient";
const fs =  require('fs-extra')
const ReactDOMServer = require('react-dom/server');
import EmailTemplate from "@/component/mailTemplate/EmailTemplate";

export default async function sendEmail(req, res) {

  const { name, email, message,phone, userLang } = req.body;

  //get sanity mail Data 
  const getMail = await client.fetch("*[_type == 'mail']");
  
  //Pass data to compo

  const ourResponse = getMail.map((mail,i)=>{
    if(mail.name.includes('client')){
      return mail
    }
  });
  
  //Algo remplacer les champs {ww}
  const stringiRes = JSON.stringify(ourResponse[0])

console.log('Object string : ')
  console.log(stringiRes)

   var mapObj = {
    name:name,
    //message:message.replace("\n\n", "$enter$enter").replace("\n", "$enter"),
    phone:phone,
    email:email
 };

 console.log(message.replace(/\s\s+/g, ' '))

 const responseText = stringiRes.replace(/\$(name|email|phone)/gi, function(matched,key){
  return mapObj[key];
});
console.log('Object string Modifier : ')
console.log(responseText)


const finalResp = JSON.parse(responseText);

/*    modifieRe.replaceAll('$name',name)
   modifieRe.replaceAll('$message',message)
   modifieRe.replaceAll('$message',message) */


//  console.log(ourResponse[0].message[userLang][0].children.text);
  //console.log(str)

  const emailHtml = ReactDOMServer.renderToStaticMarkup(<EmailTemplate name={name} message={message} userLang={userLang} ourResponse={JSON.parse(responseText)}/>);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_KEY_PASS
    },
  });


  const text = {
    fr:`Bonjour ${name}

    Merci pour votre message ! Je vous confirme que je l'ai bien reçu et je vous recontacterai dès que possible.
    En attendant, n'hésitez pas à consulter les différentes rubriques de mon site web .
    Si vous avez des questions urgentes ou des demandes spécifiques, n'hésitez pas à me contacter à nouveau en répondant à ce message.
    
    Cordialement,Marcel

    (Ceci est un mail automatique suite à la soumission du formulaire de contact sur mon site web   https://www.marcel-sawuri.online)

    Votre message :

    ${message}
    `,
    de:`Hallo ${name}

    Danke für deine Nachricht ! Ich bestätige, dass ich es erhalten habe und werde mich so schnell wie möglich mit Ihnen in Verbindung setzen.
    Zögern Sie in der Zwischenzeit nicht, die verschiedenen Bereiche meiner Website zu konsultieren.
    Wenn Sie dringende Fragen oder konkrete Wünsche haben, zögern Sie nicht, mich erneut zu kontaktieren, indem Sie auf diese Nachricht antworten.
   
    Mit freundlichen Grüßen, Marcel

    (Dies ist eine automatische E-Mail nach dem Absenden des Kontaktformulars auf meiner Website https://www.marcel-sawuri.online)

    Ihre Nachricht :
    ${message}
    `,
    en:`Hello ${name}

     Thank you for your message ! I confirm that I have received it and I will contact you as soon as possible.
     In the meantime, do not hesitate to consult the different sections of my website.
     If you have urgent questions or specific requests, do not hesitate to contact me again by replying to this message.
    
     Sincerely, Marcel

     (This is an automatic email following the submission of the contact form on my website https://www.marcel-sawuri.online)

     Your message :
     ${message}
    `

  }

  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: `${email}`,
    subject: finalResp.subject[userLang],
    html : emailHtml
    //html: await <ComplexText texts={clientResponse[userLang]}/>
    //text : text[userLang]

  };

  const mailOptions2 = {
  from: email,
  to: process.env.GMAIL_USER,
  subject: `${name} vous a envoyé un message depuis votre siteweb`,
  text: 
  `Bonjour Marcel,
  
   Vous avez recu un mail de ${name} depuis votre site web :
   
   voici son message:
   ${message}

   voici son mail pour le contacter: ${email}
   ${phone && `Voici son numero de telephone pour le contacter : ${phone}` }

   ps: Cette personne est communique en ${userLang == 'fr' ? 'Francais' : userLang == 'de' ? 'Allemand' : 'Anglais' }
  `
};

try {
  //await transporter.sendMail(mailOptions2);
  await transporter.sendMail(mailOptions);
  res.status(200).json({ message: "Emails sent successfully." });
} catch (error) {
  console.error(error);
  res.status(500).json({ message: "Failed to send emails." });
}
}
