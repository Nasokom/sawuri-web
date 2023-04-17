import React, {useEffect, useRef} from 'react'

const HeroTitle = () => {

    const main = useRef(null)
    useEffect(()=>{
        const letters = main.current.querySelectorAll('.letter')

        letters.forEach((element,i) => {
            setTimeout(()=>{
                element.style.transform = "rotate(0deg) translate(0px)";
            },100*i)
        });

    },[])



  return (
    <div className='hero-title' ref={main}>
          <div className='title-box'>
            <div className="letter">M</div>
            <div className="letter">a</div>
            <div className="letter">r</div>
            <div className="letter">c</div>
            <div className="letter">e</div>
            <div className="letter">l</div>
            </div>
            <div className='title-box'>
            <div className="letter">S</div>
            <div className="letter">a</div>
            <div className="letter">w</div>
            <div className="letter">u</div>
            <div className="letter">r</div>
            <div className="letter">i</div>
            </div>
        </div>
  )
}

export default HeroTitle