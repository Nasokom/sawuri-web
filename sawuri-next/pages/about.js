import React from 'react'
import AboutScrollContainer from '@/component/content/AboutScrollContainer'
import { client } from '@/Utils/sanity/sanityClient'
import Banner from '@/component/Ui/Banner'

const About = ({aboutData}) => {

   // console.table(aboutData[0].contenu[0].text)
  return (

    <div className='about-page'>

            <h1 className='page-title'>Biographie </h1>
            <AboutScrollContainer datas={aboutData}/>

            <Banner liens={[{
          path:'media',
          name:'media'
        },{ path:'contact',name:'contact'}]}/>

    </div>
  )
}


export async function getStaticProps() {

    const aboutData = await client.fetch(`*[_type == "contenu"]`);
    return {
      props: {
        aboutData
      }
    };
  }
export default About