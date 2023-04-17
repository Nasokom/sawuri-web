
import React, {useEffect} from 'react'
import Image from 'next/image'
import vin from '../../public/savin.webp' 

export const Loading = () => {

  useEffect(()=>{
    document.documentElement.style.overflow = "hidden"
    return ()=>{
        document.documentElement.style.overflow = "auto"
    }
  },[])



  return (
    <div className='loader'>

        <Image
        src={vin}
        height={500}
        width={500}
        />
    </div>
  )
}
