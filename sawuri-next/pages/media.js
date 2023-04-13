import React,{useRef, useEffect, useState} from 'react'
import Banner from '@/component/Ui/Banner'
import { client } from '@/Utils/sanity/sanityClient'
import { useStateContext } from '@/context/StateContext'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useIsomorphicLayoutEffect } from '@/Utils/isomorphicLayout';

gsap.registerPlugin(ScrollTrigger);

const Media = ({videos}) => {

  const [isAudio, setIsAudio]= useState(true)

  const {userLang} = useStateContext()

  const main = useRef(null)


      useEffect(()=>{
        const videos = main.current.querySelectorAll('video');
        videos.forEach((video)=>{
          video.muted = isAudio;
        })
      })



      useIsomorphicLayoutEffect(() => {


        const ctx = gsap.context((self) => {
          //console.log(main);
    
          const videos = self.selector('video')
          console.log(videos[0])
            
          //const videos = container.querySelectorAll('video');

       function fullScreen(elt, bol){
        
        bol ? elt.classList.add('fullScreen')
        :
        elt.classList.remove('fullScreen')
       }

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
            video.volume = 0.2;
              tl.to(video, {
                width:"80vw",
                height:"80vh",
                //position:"fixed",
                //zIndex:1000,
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
                <div className='video-box' key={i} >
                        <h4 >{video.titre}</h4>
                          <video  allowFullScreen muted controls onClick={()=>setIsAudio(false)} onMouseOver={()=>setIsAudio(false)}>
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