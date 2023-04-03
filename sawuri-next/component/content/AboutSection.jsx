import React,{useEffect,useRef, useState} from 'react'
import ImageBox from '../Ui/ImageBox'
import ComplexText from '../Ui/ComplexText';

const SectionTest = ({datas}) => {
  const {images, para,name, contenu} = datas;
  const main = useRef(null);
  

  return (
    <div className='about-section' ref={main}>

      <h2>{name}</h2>

      <div className='para-container'>
          {contenu.map((para,i)=>{
            //console.table(para)
            return(
              <div className='about-paragraphe' key={i} style={{zIndex:i}}>
                    <ComplexText texts={para.text} />

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