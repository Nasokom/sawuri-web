import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { client } from '@/Utils/sanity/sanityClient'
import Hero from '@/component/Hero'
import Intro from '@/component/content/Intro'
import AboutScrollContainer from '@/component/content/AboutScrollContainer'

const inter = Inter({ subsets: ['latin'] })

export default function Home({aboutData,photos}) {
  return (
    <>
      <Head>
        <title>Marcel Sawuri</title>
        <meta name="description" content="Sawuri website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Hero photos={photos}/>
        <Intro/>
        <AboutScrollContainer datas={aboutData}/>
    </>
  )
}

export async function getStaticProps() {

  const aboutData = await client.fetch(`*[_type == "contenu"]`);
  const photos = await client.fetch(`*[_type == "gallery"]`);
  return {
    props: {
      aboutData,
      photos
    }
  };
}
