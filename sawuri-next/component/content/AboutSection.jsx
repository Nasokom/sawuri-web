import React,{useEffect,useRef, useState} from 'react'
import ImageBox from '../Ui/ImageBox'
import ComplexText from '../Ui/ComplexText';
import { useStateContext } from '@/context/StateContext'

const SectionTest = ({datas:{title,titleDe,titleEn,contenu,texts,titles}}) => {

  const {userLang} = useStateContext();

  const main = useRef(null);
  
  return (
    <div className='about-section' ref={main}>

      <h2>{titles[userLang]}</h2>

      <div className='para-container'>
        
          {contenu.map((para,i)=>{
            
            useEffect(()=>{
            },[userLang])

            return(
              <div className='about-paragraphe' key={i} style={{zIndex:i}}>
                <div className='text-box'>
                   { para.texts && <ComplexText texts={para.texts[userLang]}/>}
                </div>
                    <div className='about-img-limiter' >  
                       <ImageBox data={para.image} 
                       axesRanges={{max:50,min:50}}
                      rndmZidx={false}
                        />
                    </div>
                </div>
              )
            })}
            </div>
    </div>
  )
}

export default SectionTest