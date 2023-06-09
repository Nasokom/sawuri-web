import Head from 'next/head'
import React,{useRef, useEffect, useState} from 'react'
import Banner from '@/component/Ui/Banner'
import { client } from '@/Utils/sanity/sanityClient'
import { useStateContext } from '@/context/StateContext'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useIsomorphicLayoutEffect } from '@/Utils/isomorphicLayout';

gsap.registerPlugin(ScrollTrigger);

const Media = ({videos}) => {

  const [isMuted, setIsMuted]= useState(true)

  const {userLang} = useStateContext();

  function sortContent( a, b ){
    if ( a.ordre < b.ordre){ return -1;}
    if ( a.ordre > b.ordre){return 1;}
    return 0;
    }
    const content = videos.sort(sortContent)

  const main = useRef(null)

      useIsomorphicLayoutEffect(() => {

        const ctx = gsap.context((self) => {
    
          const videos = self.selector('video')

          videos.forEach((video,i)=>{
            
            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: video,
                start: "-20% 40%",
                end: "100% 40%",
                scrub: 1,
                //markers: true
              }
            });
            
          /*   gsap.to(`#${i}`, {
              scrollTrigger: ".orange", 
              duration: 2, 
              rotation: 360
            }); */
      
               //video.volume = 0;
              tl.to(video, {
                width:"80vw",
                height:"80vh",
                onStart:()=>{video.pause(); video.currentTime=0},
                onEnterBack: ()=>{video.pause();video.style.borderRadius="20px" },
                onRepeat: ()=>{video.pause();video.style.borderRadius="20px" },
                onUpdate: ()=>video.pause(),
              },0).call(()=>video.play())//.call(play)
              
              tl.to(video, {
                borderRadius:"Opx",
                width:"100vw",
              },3.5)
              
              tl.to(video, {
                width:"400px",
                height:"300px",
                position:"absolute",
                onComplete:()=>{video.pause(); video.currentTime=0},
                onReverseComplete:()=>video.play(),
              },4)
          });


              
        }, main);
        return () => ctx.revert();
      }, []);
    

    

      

  return (

    <>
    <Head>
        <title>Media Sawuri</title>
        <meta name="description" content="Regarder les preformances de Sawuri en Videos " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="all" />
        <meta name="author" content="Sawuri"/>
        <meta name="publisher" content="Sawuri"/>
        <meta name="copyright" content="Sawuri"/>
        <meta name="page-topic" content="Sawuri"></meta>
    </Head>
    <div className='media-page' ref={main}> 

        <h1 className="page-title">Media</h1>

        <div className='video-container'>

            {content.map((video,i)=>{
              
              return (
                <div className='video-box' key={i}
                onClick={()=>setIsMuted(false)} 
                >
                        <h4 id={i+0.5}>{video.titles[userLang]}</h4>
                          <video  
                          id={i}
                          //allowFullScreenmuted
                          autoPlay 
                          controls  
                          muted
                          >
                            <source src={`/videos/${video.path}.mp4`} type="video/mp4"/>
                          </video>
                 </div>
                )
              })}
        </div>



        {/* <VideoJS options={videoJsOptions} onReady={handlePlayerReady} /> */}





        <Banner liens={[{
          path:'about',
          name:`${userLang.includes('fr') ? 'biographie' : userLang.includes('de')? 'Biografie' : 'Biography'}`,
        },{ path:'contact',name:'contact'}]}/>
    </div>
</>
  )
}

export default Media

export async function getStaticProps() {
  
  const videos = await client.fetch(`*[_type == "video"]`);
  return {
    props: {
      videos
      },
      revalidate: 1,
    };
  }