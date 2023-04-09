import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { client } from '@/Utils/sanity/sanityClient'
import Hero from '@/component/Hero'
import Intro from '@/component/content/Intro'
import Banner from '@/component/Ui/Banner'
import { useStateContext } from '@/context/StateContext';

const inter = Inter({ subsets: ['latin'] })

export default function Home({photos,marketing}) {


  const {userLang} = useStateContext();
  
  return (
    <>
      <Head>
        <title>Marcel Sawuri</title>
        <meta name="description" content="Sawuri website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Hero photos={photos}/>
        <Intro data={marketing}/>
        <Banner liens={[{
          path:'about',
          name:`${userLang.includes('fr') ? 'biographie' : userLang.includes('de')? 'Biografie' : 'Biography'}`,
        },{ path:'media',
        name:'media'
        }]}/>
    </>
  )
}

export async function getStaticProps() {

  //const aboutData = await client.fetch(`*[_type == "contenu"]`);
  const photos = await client.fetch(`*[_type == "gallery"]`);
  const marketing = await client.fetch(`*[_type == "Marketing"]`);
  return {
    props: {
     // aboutData,
     marketing,
      photos
    },
    fallback: blocking,
    revalidate: 10,
  };
}
