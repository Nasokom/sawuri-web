import TeamCard from '@/component/content/TeamCard'
import React from 'react'
import { client } from '@/Utils/sanity/sanityClient'

const Musiciens = ({team}) => {
  return (
    <div className='team-page'>

          <h1>Les Musiciens</h1>
      
      <div className='team-card-container'>
        {team.map((member,i)=>{
          
          return <TeamCard member={member} key={i}/>
        })}
      </div>

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