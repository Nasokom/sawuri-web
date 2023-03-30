import React from 'react'
import Image from 'next/image'
import { urlFor } from '@/Utils/sanity/sanityClient'
import { useStateContext } from '@/context/StateContext'


const ImageBox = ({data}) => {

    const {isMobile} = useStateContext();

    const myLoader = () => {
        return data.image && urlFor( data.image).url()}
    
    //!! PERFORMANCE ISSUES Server & CLient & Server Different
    function random(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

  return (
    <div className='image-box'  
    style={{
        position:"absolute",//,width:`${isMobile ? 200 : 400}px` ,height:`${isMobile ? 200 : 400}px`,
        top:`${random(10,90)}%`, left:`${random(10,90)}%`,zIndex:`${random(0,5)}`
    }}
    draggable="true"
    
    >

        <Image 
        //loader={myLoader}
        src={"urlFor(data.image).url()"}
        height={isMobile ? 200 : 400}
        width={isMobile ? 200 : 400}
        style={{objectFit:'contain'}}
        alt={data.name}
        loader={myLoader}
        />
    </div>
  )
}

export default ImageBox