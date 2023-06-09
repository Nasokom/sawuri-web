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
               translate:`${random(-200,200)}px ${random(-200,200)}px`,
             },0)

             tl.to(img,{
               rotate : `${random(-30,30)}deg`,
               translate:`${random(-200,200)}px ${random(-200,200)}px`,
             },0.5)

             tl.to(img,{
               rotate : `${random(-30,30)}deg`,
               translate:`${random(-5000,5000)}px ${random(-5000,5000)}px`,
               opacity: 0
             },1)
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
         },0.5)
         
         tl.to(photoLayout, {
           top:"-40vh",
           ease: "power2.inOut",
         },0)
         
         tl.to(photoLayout, {
           top:"-90vh",
           ease: "power2.inOut",
         },0.5)

          tl.to( main.current.querySelector('.hero'),{
            y:'-100vh',
          },1)


         //TODO EXTRA intro anim

         const intro = main.current.querySelector('.intro');

       

         const texts = main.current.querySelectorAll('p');


         texts.forEach((text,i)=>{

          tl.from(text,{
            scale:0.8,
            opacity:0,
            y:-200,
          },0.5)
        })

         texts.forEach((text,i)=>{

           tl.from(text,{
             scale:0,
             opacity:0,
             y:'1000px',
           },1)

           tl.to(text,{
             y:0,
             scale:1,
             opacity:1,
           },(1+i))

           tl.to(text,{
            y: "-400px",
            scale:0,
            opacity:0,
          },(2+i))
         })
         tl.to(intro,{
          y:'-100vh'
         },3)

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
         zIndex: 11
        },3)

        tl.to(main.current.querySelector('.footer-banner-title'),{
          //y: "-300px",
          scale:5,
        },0)

        tl.to(main.current.querySelector('.footer-banner-title'),{
          y: "0",
          scale:1,
        },3)

         btnBanner.forEach((btn,i)=>{
           tl.from(btn,{
             scale:'0.1',
             opacity:0,
            },0)

            tl.to(btn,{
              opacity:1,
              scale: 1,
             },3.2 + i*0.2)
          })


         
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
  const photos = await client.fetch(`*[_type == "gallery"]`);
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
