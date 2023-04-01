import React from 'react'
import Image from 'next/image'
import { urlFor } from '@/Utils/sanity/sanityClient'
import { useStateContext } from '@/context/StateContext'

const TeamCard = ({member}) => {

    const {isMobile}  = useStateContext();

    console.log(isMobile)

    const myLoader = () => {
        return member.images && urlFor(member.images).url()}


  return (
    <div className='team-card'>
        
        <h2>{member.name}</h2>


        <Image 
            style={{objectFit:'cover',borderRadius:"20px"
            }}
            src="vzzf" 
            height={ isMobile ? 400 : 500 } 
            width={ isMobile ? 300 : 500 } 
            loader={myLoader}
            alt={"image du musicien"}
        />



        <div className='team-text-container'>
        {member.desc.map((p,i)=>{
           return <p key={i}>{p}</p>
        })}
            <p>Maitrise : {member.skillz.map((skill,i)=>{
               return <span key={i}>{skill}</span>
                })}
            </p>
        </div>

       
    </div>
  )
}

export default TeamCard