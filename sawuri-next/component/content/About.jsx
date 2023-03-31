import React,{useRef} from 'react'
import AboutSection from './AboutSection'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useIsomorphicLayoutEffect } from '@/Utils/isomorphicLayout';

gsap.registerPlugin(ScrollTrigger);

const About= ({datas}) => {


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

    const sections = self.selector('.about-section');
    
    console.log(sections)
    sections.forEach((section, i) => {
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start:"top 40%",
          end: "bottom 40%",
          scrub: true,
          pin: false,
        }
      });
       const imgs = section.querySelectorAll('.about-img-limiter'),
       texts = section.querySelectorAll('p');
      console.log(texts.length + imgs.length)
      

      texts.forEach((text,i)=>{
        tl.to(text,{
          opacity:1,
          ease:"power2.inOut"
        },i == 0 ? 0 : i*2)
       })


       imgs.forEach((img,i)=>{
        tl.to(img,{
          opacity:1,
          ease:"power2.inOut",
          transform: "rotateX(0deg) rotateY(0deg)",
        },i == 0 ? 1 : i + (i+1))
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

export default About