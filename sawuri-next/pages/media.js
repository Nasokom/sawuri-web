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

  const {userLang} = useStateContext()

  const main = useRef(null)

      useIsomorphicLayoutEffect(() => {

        const ctx = gsap.context((self) => {
    
          const videos = self.selector('video')
            
          //const videos = container.querySelectorAll('video');

          videos.forEach((video,i)=>{
            
            const tl = gsap.timeline({
              scrollTrigger: {
                //scroller: video,
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
    <div className='media-page' ref={main}> 

        <h1 className="page-title">Media</h1>

        <div className='video-container'>

            {videos.map((video,i)=>{
              
              return (
                <div className='video-box' key={i}
                 onClick={()=>setIsMuted(false)} 
                >
                        <h4 id={i+0.5}>{video.titre}</h4>
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