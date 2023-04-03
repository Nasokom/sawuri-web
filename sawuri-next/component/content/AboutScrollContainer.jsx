import React,{useRef} from 'react'
import AboutSection from './AboutSection'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useIsomorphicLayoutEffect } from '@/Utils/isomorphicLayout';

gsap.registerPlugin(ScrollTrigger);

const AboutScrollContainer= ({datas}) => {


  function sortContent( a, b ){
  if ( a.ordre < b.ordre){ return -1;}
  if ( a.ordre > b.ordre){return 1;}
  return 0;
  }
  const content = datas.sort(sortContent)
  const main = useRef();

  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  useIsomorphicLayoutEffect(() => {

    const ctx = gsap.context((self) => {

    const sections = self.selector('.para-container');
    

    sections.forEach((section, i) => {
    
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start:"0 70%",
          end: "100% 60%",
          scrub: true,
          pin: false,
        }
      });

       const imgs = section.querySelectorAll('.about-img-limiter');
       const texts = section.querySelectorAll('.text-container');
       const paragraphe = section.querySelector('.about-paragraphe')
      

     /*  texts.forEach((text,i)=>{
        tl.from(text.querySelector('p'),{
         translateY: 100,
        })

        tl.to(text.querySelector('p'),{
          translateY:0,
          opacity:1,
          ease:"power2.inOut"
        },i == 0 ? 0 : i*2)
       }) */

       texts.forEach((text,i)=>{
        tl.from(text,{
         translateY: 70,
        },i == 0 ? 0 : i*2 -0,5)

        tl.to(text,{
          translateY:0,
          opacity:1,
          ease:"power2.inOut"
        },i == 0 ? 0 : i*2)
       })


       imgs.forEach((img,i)=>{
        tl.to(img,{
          opacity:1,
          ease:"power2.inOut",
          transform: "rotateX(0deg) rotateY(0deg)",
        },i == 0 ? 0.5 : (i*2)+0.5)
       })
      
});
          
    }, main);
    return () => ctx.revert();
  }, []);


  return (
    <div className='about' ref={main}>
      {content.map((data,i)=>{
        return <AboutSection datas={data} key={i}/>
      })}
        
    </div>
  )
}

export default AboutScrollContainer