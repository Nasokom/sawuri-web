import React from 'react'
import Image from 'next/image'
import { urlFor } from '@/Utils/sanity/sanityClient'
``

const ImageBox = ({data}) => {

 /*    const myLoader = () => {
        return data.image && urlFor( data.image[0])
      } */
    
      function random(max) {
        return Math.floor(Math.random() * Math.floor(max));
      }

  return (
    <div className='image-box'  
    style={{
        position:"absolute",width:"400px" ,height:"400px",
        top:`${random(99)}%`, left:`${random(99)}%`
    }}
    draggable="true">

        <Image 
        //loader={myLoader}
        src={urlFor(data.image).url()}
        layout="fill"
        objectFit="contain"
        />
    </div>
  )
}

export default ImageBox