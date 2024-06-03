import React,{useEffect, useState} from 'react'
import Image from 'next/image'
import { urlFor } from '@/Utils/sanity/sanityClient'
import { useStateContext } from '@/context/StateContext'


const ImageBox = ({data,axesRanges,rndmZidx}) => {

    const {isMobile} = useStateContext();
    //const [isMobile, setIsMobile] = useState(false);
    const {max, min} = axesRanges;

    const myLoader = () => {
      if(isMobile){
        //console.log(data)
        return data && urlFor(data).width(200).height(200).url()
      }else{
        //console.log(data)
        return data && urlFor(data).width(400).height(400).url()
      }
    }
    
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
        className='img-box'
        />
    </div>
  )
}

export default ImageBox