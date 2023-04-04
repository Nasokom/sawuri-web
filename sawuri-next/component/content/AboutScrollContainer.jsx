import React,{useRef} from 'react'
import AboutSection from './AboutSection'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useIsomorphicLayoutEffect } from '@/Utils/isomorphicLayout';
import { useStateContext } from '@/context/StateContext';

gsap.registerPlugin(ScrollTrigger);

const animation = (tl, section) => {
  const imgs = section.querySelectorAll(".about-img-limiter");
  const texts = section.querySelectorAll(".text-box");

  texts.forEach((text, i) => {
    tl.from(
      text,
      {
        translateY: 70,
      },
      i === 0 ? 0 : i * 2 - 0.5
    );

    tl.to(
      text,
      {
        translateY: 0,
        opacity: 1,
        ease: "power2.inOut",
      },
      i === 0 ? 0 : i * 2
    );
  });

  imgs.forEach((img, i) => {
    tl.to(
      img,
      {
        opacity: 1,
        ease: "power2.inOut",
        transform: "rotateX(0deg) rotateY(0deg)",
      },
      i === 0 ? 0.5 : i * 2 + 0.5
    );
  });
};


const AboutScrollContainer= ({datas}) => {


  function sortContent( a, b ){
  if ( a.ordre < b.ordre){ return -1;}
  if ( a.ordre > b.ordre){return 1;}
  return 0;
  }
  const content = datas.sort(sortContent)
  const main = useRef();
  
  const {isMobile,userLang } = useStateContext();

  useIsomorphicLayoutEffect(() => {
    
    const ctx = gsap.context((self) => {

    const sections = self.selector('.para-container');
    
    //const sections = gsap.utils.toArray(".para-container");
    const tl = gsap.timeline();

    sections.forEach((section, i) => {
      animation(tl, section);

      ScrollTrigger.create({
        trigger: section,
        start:`${isMobile ? "0% 70%" : 'top 90%'}`,
        end: "100% 60%",
        scrub: true,
        pin: false,
        animation: tl,
      });
    });
  
          
    }, main);
    return () =>{
      ctx.revert();
    }
 
  }, [userLang]);


  return (
    <div className='about' ref={main}>
      {content.map((data,i)=>{
        return <AboutSection datas={data} key={i}/>
      })}
        
    </div>
  )
}

export default AboutScrollContainer