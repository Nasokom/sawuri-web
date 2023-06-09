import React ,{useState, useEffect, useRef}from 'react'
import ComplexText from '../Ui/ComplexText';
import { useStateContext } from '@/context/StateContext';


const Intro = ({data}) => {
const main = useRef(null);

useEffect(()=>{
    
    const text = main.current.querySelectorAll('p'), //recuperer tout les textes
     text1 = text[0].textContent

  console.log(text1)
  console.log(text1.length)
  
    const lineBreaks = [];
  
    for (let i = 0; i < text1.length; i++) {
      if (text1[i] == '\n') {
        lineBreaks.push(i);
        console.log('Yes')
      }else{
        console.log('n')
      }
    }

  
    console.log(lineBreaks);
    
  },[])


 
  const {userLang} = useStateContext();


  return (
    <div className='intro' ref={main} >
      <ComplexText texts={data[0].text[userLang]}/>
    </div>
  )
}

export default Intro
