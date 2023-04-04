import TeamCard from '@/component/content/TeamCard'
import React from 'react'
import { client } from '@/Utils/sanity/sanityClient'
import Banner from '@/component/Ui/Banner'
import { useStateContext } from '@/context/StateContext'

const Musiciens = ({team}) => {

  const {userLang} = useStateContext()
  return (
    <div className='team-page'>

          <h1 className='page-title'>{userLang.includes('fr') ? 'Les Musiciens' : userLang.includes('de')? 'Die Musiker' : 'The musicians'}</h1>
      
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
  )
}

export default Musiciens

export async function getStaticProps() {

  const team = await client.fetch(`*[_type == "team"]`);
  return {
    props: {
      team
    }
  };
}