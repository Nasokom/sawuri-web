import React,{useRef, useEffect} from 'react'
import { client } from '@/Utils/sanity/sanityClient'

const Media = ({videos}) => {

        const main = useRef()
    useEffect(()=>{
        //._4_6w{
        const elt = main.current.querySelectorAll('._1o0y');
        console.log(elt)
    })
  return (
    <div className='media-page' ref={main}> 


            {videos.map((video)=>{
                return (
                    <div >
                        <h4 style={{color:"red"}}>{video.titre}</h4>
                        <h4 style={{color:"red"}}>
                        ${video.source == 'youtube' ? '?&showinfo=0&controls=0' :''}
                        </h4>
                        <iframe width="560" height="420" src={`${video.url}${video.url == 'youtube' ? '' :''}`}
                        frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share; fullscreen" allowfullScreen="true" allowFullScreen="true"
                        ></iframe>
                    </div>
                )
            })}


        {/* <iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fmarcel.sawuri%2Fvideos%2F179844232677688%2F&show_text=false&t=0"
 width="560" height="420" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
            */}
    </div>
  )
}

export default Media

export async function getStaticProps() {

    const videos = await client.fetch(`*[_type == "video"]`);
    return {
      props: {
        videos
      }
    };
  }