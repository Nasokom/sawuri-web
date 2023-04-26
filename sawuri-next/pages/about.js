import React from 'react'
import Head from 'next/head'
import AboutScrollContainer from '@/component/content/AboutScrollContainer'
import { client } from '@/Utils/sanity/sanityClient'
import Banner from '@/component/Ui/Banner'
import { useStateContext } from '@/context/StateContext'

const About = ({aboutData}) => {


  const {userLang} = useStateContext();

  return (
<>
    <Head>
        <title>About Sawuri</title>
        <meta name="description" content="Apprenez en plus sur le groupe Sawuri, et son fondateur Marcel Sawuri" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="all" />
    </Head>

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
            </>
  )
}


export async function getStaticProps() {

    const aboutData = await client.fetch(`*[_type == "contenu"]`);
    return {
      props: {
        aboutData
      },
      revalidate: 1,
    };
  }
export default About