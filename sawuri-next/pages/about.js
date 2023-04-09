import React from 'react'
import AboutScrollContainer from '@/component/content/AboutScrollContainer'
import { client } from '@/Utils/sanity/sanityClient'
import Banner from '@/component/Ui/Banner'
import { useStateContext } from '@/context/StateContext'

const About = ({aboutData}) => {


  const {userLang} = useStateContext();

   // console.table(aboutData[0].contenu[0].text)
  return (

    <div className='about-page'>

            <h1 className='page-title'>{userLang.includes('fr') ? 'biographie' : userLang.includes('de')? 'Biografie' : 'Biography'}</h1>
            <AboutScrollContainer datas={aboutData}/>

            <Banner liens={[{
          path:'media',
          name:'media'
        },{ 
          path:'contact',
          name:`${userLang.includes('fr') ? 'contact' : userLang.includes('de')? 'Kontakt' : 'contact'}`,
        }]}/>

    </div>
  )
}


export async function getStaticProps() {

    const aboutData = await client.fetch(`*[_type == "contenu"]`);
    return {
      props: {
        aboutData
      },
      fallback: blocking,
      revalidate: 10,
    };
  }
export default About