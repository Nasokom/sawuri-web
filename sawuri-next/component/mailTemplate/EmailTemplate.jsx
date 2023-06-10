import React,{useState,useEffect} from 'react'
import ComplexText from '../Ui/ComplexText';

function EmailTemplate({ name, message,ourResponse, userLang}) {






    return (
      <html>
        <head>
          <title>Mon e-mail</title>
        </head>
        <body>
          <h1>{ourResponse.subject[userLang]}</h1>
          <ComplexText texts={ourResponse.message[userLang]}/>
        </body>
      </html>
    );
  }
  
  export default EmailTemplate;