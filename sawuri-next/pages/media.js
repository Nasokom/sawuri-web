import React,{useRef, useEffect} from 'react'
import Banner from '@/component/Ui/Banner'
import { client } from '@/Utils/sanity/sanityClient'
import { useStateContext } from '@/context/StateContext'

const Media = ({videos}) => {

  const {userLang} = useStateContext()

        const main = useRef()

  return (
    <div className='media-page' ref={main}> 

        <h1 className="page-title">Media</h1>

        <div className='video-container'>

            {videos.map((video,i)=>{
              return (
                <div className='video-box' key={i}>
                        <h4 >{video.titre}</h4>
                        <iframe width="560" height="420" src={`${video.url}${video.url == 'youtube' ? '' :''}`}
                        frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share; fullscreen" allowfullScreen="true" allowFullScreen="true"
                        ></iframe>
                    </div>
                )
              })}
        </div>

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
      fallback: blocking,
      revalidate: 10,
    };
  }