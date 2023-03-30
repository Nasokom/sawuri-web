import React,{useRef} from 'react'
import PhotoLayout from './Ui/PhotoLayout'
import { gsap } from 'gsap';
import { ScrollTrigger} from 'gsap/dist/ScrollTrigger';
import { useIsomorphicLayoutEffect } from '../Utils/isomorphicLayout';

gsap.registerPlugin(ScrollTrigger);

const Hero = ({photos}) => {

  const main = useRef();

  useIsomorphicLayoutEffect(() => {

    const ctx = gsap.context((self) => {


    const photoLayout = self.selector('.photo-layout');
        
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: main.current,
            start:"top top",
            end: "+=1000px",
            scrub: true,
            pin: true,
          }
        });
      
        tl.to(photoLayout, {
          top:"-100vh",
          ease: "power2.inOut",
        },0)
          
    }, main);
    return () => ctx.revert();
  }, []);


  return (
    <div className='hero' ref={main}>
          <PhotoLayout photos={photos}/>
        <div className='hero-title-box'>
          <h1>Marcel Sawuri</h1>
        </div>
    </div>
  )
}

export default Hero