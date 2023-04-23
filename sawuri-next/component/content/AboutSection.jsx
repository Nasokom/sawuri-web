import React,{useEffect,useRef, useState} from 'react'
import ImageBox from '../Ui/ImageBox'
import ComplexText from '../Ui/ComplexText';
import { useStateContext } from '@/context/StateContext'

const SectionTest = ({datas:{title,titleDe,titleEn,contenu}}) => {

  const {userLang} = useStateContext();

  const main = useRef(null);
  
  return (
    <div className='about-section' ref={main}>

      <h2>{
        userLang.includes('fr') ? title
        : userLang.includes('de') ? titleDe
        : titleEn
      }</h2>

      <div className='para-container'>
        
          {contenu.map((para,i)=>{
            const [tradText,setTradText] = useState(null)
            
            useEffect(()=>{
              setTradText(userLang.includes('fr') ? para.text 
              : userLang.includes('de') ? para.textDe
              : para.textEn)
            },[tradText])

            return(
              <div className='about-paragraphe' key={i} style={{zIndex:i}}>
                <div className='text-box'>
                    { tradText && <ComplexText texts={tradText} />}
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