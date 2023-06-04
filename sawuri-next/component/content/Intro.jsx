import React ,{useState, useEffect}from 'react'
import ComplexText from '../Ui/ComplexText';
import { useStateContext } from '@/context/StateContext';


const Intro = ({data}) => {

  
  const {userLang} = useStateContext();

  return (
    <div className='intro'>
      <ComplexText texts={data[0].text[userLang]}/>
    </div>
  )
}

export default Intro
