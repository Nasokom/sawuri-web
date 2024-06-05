
import React from 'react'
import { useStateContext } from '@/context/StateContext'
import { client } from '@/Utils/sanity/sanityClient'
import MuxPlayer from '@mux/mux-player-react/lazy'

const Video = ({videos}) => {
      
    const {userLang} = useStateContext();

  return (

    <>
    <div className='media-page'> 

        <h1 className="page-title">Media</h1>

        <div className='video-container'>

          <MuxPlayer playbackId= {"fdNVRAfU00yOGVv1OEXh65ossm1iT9AbyyGBzeinSIUc"}/>

            {videos.map((video,i)=>{
              
              return (
                <div className='video-box' key={i}
                >
                        <h4 id={i+0.5}>{video.titles[userLang]}</h4>
                        { video.video && <MuxPlayer  loading="viewport" playbackId={video.video.asset.playbackId}/> }
                       {video.video && console.log(video)}
                        <video  
                        className='gsap-video'
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


    </div>
</>
  )
}

export default Video

export async function getStaticProps() {
  
  const videos = await client.fetch(`*[_type == "video"]{
    titles,
    path,
    video {
      asset-> {
        playbackId,
        assetId,
        filename,
      }
    }
   
  }`);
  return {
    props: {
      videos
      },
      revalidate: 1,
    };
  }