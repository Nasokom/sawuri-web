import Head from 'next/head'
import React,{useState} from 'react'
import axios from "axios";
import MailResponse from '@/component/Ui/MailResponse';
import Banner from '@/component/Ui/Banner';
import { useStateContext } from '@/context/StateContext';


const Contact = () => {

    //lang
    const {userLang} = useStateContext();

    //Mail State
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [phone,setPhone] = useState("")
    
    // Ux Mail progree
    const [success, setSuccess] = useState(null);
    const [toggleMsg, setToggleMsg]= useState(false);
    const [sendingMail, setSendingMail] = useState(false);
    //Gerer les erreur de saisie 

    const editValue = (e) =>{
        const form = e.target.form; 
        setName(form[0].value)
        setEmail(form[1].value)
        setPhone(form[2].value)
        setMessage(form[3].value)
    }   



    const handleSubmit = async (event) => {
        event.preventDefault();
      setSendingMail(true)
        
        //send the mail
        try {
          const response = await axios.post("/api/sendMail", {
              name,
            email,
            phone,
            message,
            userLang

        });
            
          //setSuccess(response.data.message);
          setToggleMsg(true)
          setSuccess(true)
          setSendingMail(false)
          
        } catch (error) {
            setSendingMail(false)
            setToggleMsg(true)
            setSuccess(false)
          console.log(error)
        }

        //Clean input
            setTimeout(()=>{
                const form = event.target;
                success && 
                    setName("");
                    setEmail("");
                    setSubject("");
                    setMessage("");
                    setError("");
                    form[0].value = ""
                    form[1].value = ""
                    form[2].value = ""
                    form[3].value = ""
            },1000)

      };
    


  return (
    <>
    <Head>
        <title>Contact</title>
        <meta name="description" content="Contact Sawuri" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="all" />
        <meta name="author" content="Marcel Sawuri"/>
        <meta name="publisher" content="Marcel Sawuri"/>
        <meta name="copyright" content="Marcel Sawuri"/>
        <meta name="page-topic" content=" Contacter Sawuri"></meta>
    </Head>
    <div className='contact-page'>
            <h1 className="page-title">
            {userLang.includes('fr') ? 'contact' : userLang.includes('de')? 'Kontakt' : 'contact'}
              </h1>

  
    {/* <h3>Vous souhaitez collaborer avec moi, discuter musique ou simplement dire bonjour ? N'hésitez pas à utiliser le formulaire ci-dessous pour entrer en contact !</h3> */}
            {error && <p>{error}</p>}
            {success && <p>{success}</p>}
            <div>
                <form id='contact-form' onSubmit={(e)=>handleSubmit(e)} onChange={(e)=>editValue(e)}>
                    <input type="text" name='nom' placeholder={userLang.includes('fr') ? 'Nom' : userLang.includes('de')? 'Name' : 'nom'} required={true} />
                    <input type='email' name='mail' placeholder='Email' required={true} />
                    <input type='tel' name="tel" placeholder='Phone' />
                    <textarea id="txtid" name="message" placeholder={userLang.includes('fr') ? 'Message' : userLang.includes('de')? 'Nachricht' : 'Message'} rows="10" cols="50" maxLength="1000" required={true} >
                    </textarea>
                    <button id="submit" type='submit' name='submit-btn' 
                    className={sendingMail&&'sending'}
                    value={userLang.includes('fr') ? 'envoyer' : userLang.includes('de')? 'schicken' : 'send'} >

                        {userLang.includes('fr') && !sendingMail ? 'envoyer' 
                        : userLang.includes('fr') && sendingMail? 'envoie' 
                        
                        : userLang.includes('de') && !sendingMail ? 'schicken' 
                        : userLang.includes('de') && sendingMail ? 'schick' 
                        
                        : !sendingMail  ? 'send' : 'sending'}
                      
                      </button>
                </form>
            </div>


                {toggleMsg && <MailResponse success={success} closeMsg={setToggleMsg}/>}


                <Banner liens={[{
                  path:'about',
                  name:`${userLang.includes('fr') ? 'biographie' : userLang.includes('de')? 'Biografie' : 'Biography'}`,
                },{ path:'media',name:'media'}]}/>
    </div>
</>
  )
}

export default Contact