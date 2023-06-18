import React,{useRef, useState,useEffect} from 'react'
import PhotoLayout from './Ui/PhotoLayout'

import ScrollDownArrow from './Ui/ScrollDownArrow';
import HeroTitle from './Ui/HeroTitle';

const Hero = ({photos}) => {

  return (

      <div className='hero' >
        <ScrollDownArrow/>
          <PhotoLayout photos={photos}/>
        <HeroTitle/>
      </div>
  )
}

export default Hero