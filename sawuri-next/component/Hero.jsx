import React,{useRef, useState,useEffect} from 'react'
import PhotoLayout from './Ui/PhotoLayout'
import { gsap } from 'gsap';
import { ScrollTrigger} from 'gsap/dist/ScrollTrigger';
import { useIsomorphicLayoutEffect } from '../Utils/isomorphicLayout';
import ScrollDownArrow from './Ui/ScrollDownArrow';
import HeroTitle from './Ui/HeroTitle';
gsap.registerPlugin(ScrollTrigger);

const Hero = ({photos}) => {

const main = useRef();

 useIsomorphicLayoutEffect(() => {


   const ctx = gsap.context((self) => {

            //console.log(main);
            const photoLayout = self.selector('.photo-layout');
            const titleBox = self.selector('.hero-title')
            const arrow = main.current.querySelector('#scroll-down');
            function onEnd(){
              const logo =document.querySelector('#logo');
              //logo.style.color="red";
              logo.classList.remove('invisible-logo');
              const title =document.querySelector('.hero-title');
              title.style.opacity = 0;
            }
            
            function onStart(){
              const logo =document.querySelector('#logo');
              //logo.style.opacity = 0
              logo.classList.add('invisible-logo');
              const title =document.querySelector('.hero-title');
              title.style.opacity = 1;
            }


            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: main.current,
                start:"top top",
                end: "+=1500px",
                scrub: true,
                pin: true,
                onEnterBack: onStart,
                onStart: onStart
              }
            });

              
              tl.to(arrow,{
                opacity:0,
              })
              
              tl.to(titleBox,{
                top :10,
                left:20,
                width:'fit-content',
                fontSize:'3vw',
                position:"fixed",
                marginLeft: 0,
                onComplete:onEnd,
                onReverseComplete:onStart,
          },0.5)
          
          tl.to(photoLayout, {
            top:"-40vh",
            ease: "power2.inOut",
          },0)
          
          tl.to(photoLayout, {
            top:"-90vh",
            ease: "power2.inOut",
          },0.5)
          

          
        }, main);
        return () => ctx.revert();
      }, []);

  
  return (
    <div className='hero' ref={main}>
        <ScrollDownArrow/>
          <PhotoLayout photos={photos}/>
        {/* <div className='hero-title'>
          <span>Marcel </span>
          <span>Sawuri</span>
        </div> */}
        <HeroTitle/>

    </div>
  )
}

export default Hero