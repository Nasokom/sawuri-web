import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { client } from '@/Utils/sanity/sanityClient'
import Hero from '@/component/Hero'
import Intro from '@/component/content/Intro'
import Banner from '@/component/Ui/Banner'
import { useStateContext } from '@/context/StateContext';
import { useEffect,useRef, useState } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger} from 'gsap/dist/ScrollTrigger';
import { useIsomorphicLayoutEffect } from '../Utils/isomorphicLayout';

const inter = Inter({ subsets: ['latin'] })

gsap.registerPlugin(ScrollTrigger);

export default function Home({photos,marketing}) {


const {userLang,isMobile} = useStateContext();
const main = useRef(null)

const [fix,setFix] = useState(0)

useIsomorphicLayoutEffect(() => {


  const ctx = gsap.context((self) => {

           const photoLayout = self.selector('.photo-layout');
           const title = self.selector('.hero-title')
           const arrow = main.current.querySelector('#scroll-down');

           const imgs = main.current.querySelectorAll('.img-box')
           
 

           function onEnd(){
             const logo =document.querySelector('#logo');
             logo.classList.remove('invisible-logo');
             const title =document.querySelector('.hero-title');
             title.style.opacity = 0;
           }
           
           function onStart(){
             const logo = document.querySelector('#logo');
             logo.classList.add('invisible-logo');
             const title =document.querySelector('.hero-title');
             title.style.opacity = 1;
             self.selector('.title-box')[0].style.transition = "0s";
             self.selector('.title-box')[1].style.transition = "0s";
           }


           const tl = gsap.timeline({
             scrollTrigger: {
               trigger: main.current,
               start:"top top",
               end: "+=7000vh",
               scrub: true,
               pin: true,
               onEnterBack: onStart,
               onStart: onStart
             }
           });

           tl.to(arrow,{
             opacity:0,
           })

           function random(min, max) {
             return Math.floor(Math.random() * (max - min + 1) + min);
           }
 

           //Image anim
           imgs.forEach((img,i)=>{

             tl.to(img,{
               rotate : `${random(-30,30)}deg`,
               translate:`${random(-300,300)}px ${random(-300,300)}px`,
             },0)//0

             tl.to(img,{
               rotate : `${random(-30,30)}deg`,
               translate:`${random(-400,400)}px ${random(-400,400)}px`,
             },0.5)//1

             tl.to(img,{
               rotate : `${random(-30,30)}deg`,
               translate:`${random(-2000,2000)}px ${random(-2000,2000)}px`,
               opacity: 0
             },1)//2
           })
             
           //Title anim  
             tl.to(title,{
               transition:0,
               top :'10px',
               //left:20,
               translateX:'20px',
               lineHeight:"0.8em",
               width:'fit-content',
               fontSize:'3vw',
               position:"fixed",
               marginLeft: 0,
               onComplete:onEnd,
               onReverseComplete:onStart,
         },0.5)//1
         
         tl.to(photoLayout, {
           top:"-40vh",
           ease: "power2.inOut",
         },0)//0
         
         tl.to(photoLayout, {
           top:"-90vh",
           ease: "power2.inOut",
         },0.5)//1

          tl.to( main.current.querySelector('.hero'),{
            y:'-100vh',
          },1)//2


         //TODO EXTRA intro anim

         const intro = main.current.querySelector('.intro');

       

         const texts = main.current.querySelectorAll('p');

          const letters = main.current.querySelectorAll('.letterEffect')

         texts.forEach((text,i)=>{

          tl.from(text,{
            scale:0.8,
            opacity:0,
            y:400,
          },0.5)//1
        })

         texts.forEach((text,i)=>{

           tl.from(text,{
             //scale:0,
             opacity:0,
             y:'-1000px',
           },1)//2

           tl.to(text,{
             y:0,
             //scale:1,
             opacity:1,
           },(1+i*0.5))//2+i

           tl.to(text,{
            y: "-700px",
           // scale:0,
            opacity:0,
          },(1.5+i*0.5))//3+i
         })

         //todo letter effect
         letters.forEach((l,i)=>{

          tl.from(l,{
            y:400,
            rotateY:'45deg',
            translateY:"400px",
            scale:0
          },1.1)//3+i

          tl.to(l,{
            opacity:1,
            y:0,
            scale:1
          },1+i/600)//3+i
         })


         tl.to(intro,{
          y:'-100vh'
         },2)//4

         //footer-banner
         const banner = main.current.querySelector('.footer-banner');
         const btnBanner = main.current.querySelectorAll('.footer-banner-btn');

         tl.from(banner,{
          opacity:0,
          position:'absolute'
        },0)

        tl.to(banner,{
         y:'-100vh',
         opacity:1,
         zIndex: 100
        },2)

        tl.to(main.current.querySelector('.footer-banner-title'),{
          //y: "-300px",
          scale:5,
        },0)

        tl.to(main.current.querySelector('.footer-banner-title'),{
          y: "0",
          scale:1,
        },2)

         btnBanner.forEach((btn,i)=>{
           tl.from(btn,{
             scale:'0.1',
             opacity:0,
            },0)

            tl.to(btn,{
              opacity:1,
              scale: 1,
             },2)
          })

          tl.to(main.current.querySelector('.footer-banner-title'),{
           opacity:1,
          },2.5)

         
         
       }, main);
       return () => ctx.revert();
     }, []);
  
  return (
    <>
      <Head>
        <title>Marcel Sawuri</title>
        <meta name="description" content="Sawuri website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="all" />
        <meta name="author" content="Sawuri"/>
        <meta name="publisher" content="Sawuri"/>
        <meta name="copyright" content="Sawuri"/>
        <meta name="page-topic" content="Sawuri"></meta>
      </Head>


        <div ref={main}>

        <Hero photos={photos} data={marketing}/>
        <Intro data={marketing}/>
        <Banner
        liens={[{
          path:'about',
          name:`${userLang.includes('fr') ? 'biographie' : userLang.includes('de')? 'Biografie' : 'Biography'}`,
        },{ path:'media',
        name:'media'
      }]}/>
    </div>
      </>
  )
}

export async function getStaticProps() {

  //const aboutData = await client.fetch(`*[_type == "contenu"]`);
  const photos = await client.fetch(`*[_type == "gallery"]|order(orderRank)`);
  const marketing = await client.fetch(`*[_type == "Marketing"]`);
  return {
    props: {
     // aboutData,
     marketing,
      photos
    },
    revalidate: 1,
  };
}
