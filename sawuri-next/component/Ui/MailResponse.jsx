import React,{useEffect} from 'react'
import Link from 'next/link'
import { useStateContext } from '@/context/StateContext'

const MailResponse = ({success, closeMsg}) => {

    //success
     const {userLang} = useStateContext()

     
    useEffect(()=>{
     },[userLang])



const sendSucT ={fr:'Mail envoyé avec succes', de:'Mail erfolgreich gesendet',en:'Mail sent successfully'};
const sendErrT ={fr:"Oups, le mail n'a pas pus etre envoyé", de:'Hoppla, die E-Mail konnte nicht gesendet werden',en:'Oops, the email could not be sent'}
const succesTrad1 ={fr:' Merci pour le mail , vous recevrez un recapitulatif dans votre boite mail.', de:'Vielen Dank für die E-Mail. Sie erhalten eine Zusammenfassung in Ihrem Postfach.', en:'Thank you for the email, you will receive a summary in your mailbox.'}
const succesTrad2 ={fr:'Voici mon mail :', en:'Here is my mail :',de:'Hier ist meine Mail:'}
const succesTrad3 ={fr:'Je vous contacte au plus vite', de:'Ich werde mich so schnell wie möglich mit Ihnen in Verbindung setzen', en:'I will contact you as soon as possible'}
const succesTrad4 = {fr:'Merci, Marcel.', en:'Thank you, Marcel.', de:'Danke, Marcel.'}
const closeTrad = {fr:'fermer',de :'Closde', en: 'Close' }


  return (
    <div className='mail-response'>
        <div className='mail-response-container'>
          <h2>{success ? sendSucT[userLang]: sendErrT[userLang]}</h2>
            {
                success ?  <p>{succesTrad1[userLang]}</p> :
                 <p>{succesTrad2[userLang]}</p>
            }
            { success ? <p>{succesTrad3[userLang]}</p> :
            <p> <a href="mailto:marcel.sawuri@gmail.com">marcel.sawuri@gmail.com</a></p>
            }
            <p>{succesTrad4[userLang]}</p>
        </div>


      {success ? 

        <Link href={'/'}>
          <button onClick={()=>closeMsg(false)}>
            {closeTrad[userLang]}
          </button>
        </Link> 
        
        :

            <button onClick={()=>closeMsg(false)}>
            {closeTrad[userLang]}
          </button>
        }

    </div>
  )
}

export default MailResponse