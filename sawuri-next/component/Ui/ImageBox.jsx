import React,{useEffect, useState} from 'react'
import Image from 'next/image'
import { urlFor } from '@/Utils/sanity/sanityClient'
import { useStateContext } from '@/context/StateContext'


const ImageBox = ({data,axesRanges,rndmZidx}) => {

    const {isMobile} = useStateContext();
    //const [isMobile, setIsMobile] = useState(false);
    const {max, min} = axesRanges;

    const myLoader = () => {
        return data && urlFor(data).url()}
    
    //!! PERFORMANCE ISSUES Server : CLient & Server Different style
    //TODO Maybe try a useEffect side effect to be sur all elt are there
    function random(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }


  return (
    <div className='image-box'  
    style={{
        position:"absolute",rotate:`${random(-15,15)}deg`,
        top:`${random(min,max)}%`, left:`${random(min,max)}%`,zIndex:`${ rndmZidx && random(0,5)}`
    }}
    draggable="true"
    >

        <Image 
        //loader={myLoader}
        src={"urlFor(data.image).url()"}
        height={isMobile ? 200 : 400}
        width={isMobile ? 200 : 400}
        style={{objectFit:'contain'}}
        alt={'photo de marcel'}
        loader={myLoader}
        />
    </div>
  )
}

export default ImageBox