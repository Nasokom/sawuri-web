import React, {useEffect, useRef} from 'react'
import {HiOutlineArrowNarrowRight} from 'react-icons/hi'

const ScrollDownArrow = () => {

  const main = useRef(null)

  useEffect(()=>{

    document.documentElement.style.overflow = "hidden"
    
    setTimeout(()=>{
      main.current.style.scale = "1 1"
      document.documentElement.style.overflow = "auto"
    },1800)
    return ()=>{
        document.documentElement.style.overflow = "auto"
    }
  },[])

  return (
    <div id="scroll-down" ref={main}>
      scroll Down
      <HiOutlineArrowNarrowRight id='down-arrow'/>  
    </div>
  )
}
export default ScrollDownArrow