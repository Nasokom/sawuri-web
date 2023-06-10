import React,{useState,useEffect} from 'react'
import ComplexText from '../Ui/ComplexText';
import fs from 'fs';
import path from 'path';

function EmailTemplate({ name, message,ourResponse, userLang}) {

  const bg = 'linear-gradient(144deg, rgba(255,255,255,1) 0%, rgba(255,228,197,1) 100%);';

  const wrapperStyles = {
    //background: 'radial-gradient(circle, rgba(255,228,197,1) 7%, rgba(255,255,255,0) 80%);',
    padding: '10px',
  };

  const base = {
    boxSizing:' border-box',
    padding: 0,
    margin: 0,
  }

  const html = {
    background: 'red',
    boxSizing:' border-box',
    padding: 0,
    margin: 0,
  }

  const img = {
    objectFit:'contain',
    width:'100%',
    backgroundPosition:'center',
  }

  const line ={
    backgroundColor:'#f7ede3',
    width:'100%',
    height:'10px',
    borderRadius:'30px',
    marginTop:'40px',
    marginBottom: '40px'
  }


/*   const imagePath = '/public/marcel_logo.png';

// Lire l'image en tant que buffer
const imageBuffer = fs.readFileSync(imagePath);

// Convertir le buffer en chaîne Base64
const base64Image = imageBuffer.toString('base64');
  const imageSrc = `data:image/png;base64,${base64Image}`;
 */
    return (
      <html style={{...html,...base}}>
        <head>
          <title>Mon e-mail</title>
        </head>
        <body style={{...wrapperStyles,...base}}>

            <h1>{ourResponse.subject[userLang]}</h1>

            <div style={line}></div>

            <ComplexText texts={ourResponse.message[userLang]}/>

            <div style={line}></div>

            <img  style={img} 
            src="https://sawuri.vercel.app/marcel_logo.jpg" 
            //src={imageSrc}
            alt="Image" />
        </body>
      </html>
    );
  }
  
  export default EmailTemplate;