import React from 'react'
import AboutScrollContainer from '@/component/content/AboutScrollContainer'
import { client } from '@/Utils/sanity/sanityClient'

const About = ({aboutData}) => {

    console.log(aboutData)
  return (

    <div className='about-page'>

            <h1>Biographie </h1>
            <AboutScrollContainer datas={aboutData}/>

            <div>

                <h2>Decouvir ses composition</h2>

                <h2>Decouvir les musiciens de Sawuri</h2>
            </div>



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