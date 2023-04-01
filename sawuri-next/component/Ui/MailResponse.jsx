import React from 'react'


const MailResponse = ({success, closeMsg}) => {

    //success
     

  return (
    <div className='mail-response'>
        <div className='mail-response-container'>
          <h2>{success ? "Mail envoyé avec succes": "Oups, le mail n'a pas pus etre envoyé"}</h2>
            {
                success ?  <p> Merci pour le mail , vous recevrez un recapitulatif dans votre boite mail.</p> :
                 <p>Voici mon mail :</p>
            }
            { success ? <p>Je vous contact au plus vite</p> :
            <p> <a href="mailto:marcel.sawuri@gmail.com">marcel.sawuri@gmail.com</a></p>
            }
            <p>Merci, Marcel.</p>
        </div>
        <button onClick={()=>closeMsg(false)}>Fermer</button>

    </div>
  )
}

export default MailResponse