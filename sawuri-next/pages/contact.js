import React,{useState} from 'react'
import axios from "axios";
import MailResponse from '@/component/Ui/MailResponse';
import Banner from '@/component/Ui/Banner';
import { useStateContext } from '@/context/StateContext';


const Contact = () => {

  const {userLang} = useStateContext();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(null);
    const [toggleMsg, setToggleMsg]= useState(false)

    //Gerer les erreur de saisie 

    const editValue = (e) =>{
        const form = e.target.form; 
        //console.log(form)
        setName(form[0].value)
        setEmail(form[1].value)
        setMessage(form[3].value)
        //console.table(mail)
    }   



    const handleSubmit = async (event) => {
        event.preventDefault();
        
        
        //send the mail
        try {
          const response = await axios.post("/api/sendMail", {
              name,
            email,
            message,
        });
            
          //setSuccess(response.data.message);
          setToggleMsg(true)
          setSuccess(true)
          
        } catch (error) {
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
    <div className='contact-page'>
            <h1 className="page-title">
              {userLang == 'fr' ? 'contact' : userLang == 'de'? 'Kontakt' : 'en'}
              </h1>


    {/* <h3>Vous souhaitez collaborer avec moi, discuter musique ou simplement dire bonjour ? N'hésitez pas à utiliser le formulaire ci-dessous pour entrer en contact !</h3> */}
            {error && <p>{error}</p>}
            {success && <p>{success}</p>}
            <div>
                <form id='contact-form' onSubmit={(e)=>handleSubmit(e)} onChange={(e)=>editValue(e)}>
                    <input type="text" name='nom' placeholder='Nom' required={true} />
                    <input type='email' name='mail' placeholder='Email' required={true} />
                    <input type='tel' name="tel" placeholder='Phone' />
                    <textarea id="txtid" name="message" placeholder='Message' rows="10" cols="50" maxLength="1000" required={true} >
                    </textarea>
                    <input id="submit"type='submit' name='submit-btn' value={'envoyer'} />
                </form>
            </div>
                {toggleMsg && <MailResponse success={success} closeMsg={setToggleMsg}/>}

                <Banner liens={[{
          path:'about',
          name:'biographie'
        },{ path:'media',name:'media'}]}/>
    </div>
  )
}

export default Contact