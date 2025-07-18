import Head from 'next/head'
import TeamCard from '@/component/content/TeamCard'
import React from 'react'
import { client } from '@/Utils/sanity/sanityClient'
import Banner from '@/component/Ui/Banner'
import { useStateContext } from '@/context/StateContext'

const Musiciens = ({team}) => {

  const {userLang} = useStateContext()
  return (

    <>
    <Head>
        <title>Sawuri Team</title>
        <meta name="description" content="learn about the Sawuri crew-member" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="all" />
        <meta name="author" content="Sawuri"/>
        <meta name="publisher" content="Sawuri"/>
        <meta name="copyright" content="Sawuri"/>
        <meta name="page-topic" content="Sawuri"></meta>
    </Head>
    <div className='team-page'>

          <h1 className='page-title'>{userLang.includes('fr') ? 'Les Musiciens' : userLang.includes('de')? 'Die Musiker' : 'The musicians'}</h1>
      
      <br/>
      <br/>
      <br/>
      <br/>
      <p style={{padding:'20px'}}>
        {userLang.includes('fr') ? `Voici quelques musiciens qui ont marqué la musique de Sawuri Merci à eux pour leur professionnalisme et leur virtuosité` 
        : userLang.includes('de')? `Hier sind einige Musiker, die die Musik von Sawuri geprägt haben Danke an sie für ihre Professionalität und Virtuosität`
        : 'Here are some musicians who marked the music of Sawuri Thanks to them for their professionalism and their virtuosity'}
      </p>

      <div className='team-card-container'>
        {team.map((member,i)=>{
          
          return <TeamCard member={member} key={i}/>
        })}
      </div>
      <Banner liens={[{
        path:'about',
        name:`${userLang.includes('fr') ? 'biographie' : userLang.includes('de')? 'Biografie' : 'Biography'}`,
      },{ path:'media',name:'media'}]}/>
    </div>
</>
  )
}

export default Musiciens

export async function getStaticProps() {
  
  const team = await client.fetch(`*[_type == "team"]|order(orderRank)`);
  return {
    props: {
      team
    },
    revalidate: 1,
  };
}