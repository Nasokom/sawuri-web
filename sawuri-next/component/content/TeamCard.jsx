import React,{useState,useEffect} from 'react'
import Image from 'next/image'
import { urlFor } from '@/Utils/sanity/sanityClient'
import { useStateContext } from '@/context/StateContext'
import ComplexText from '../Ui/ComplexText'

const TeamCard = ({member}) => {

    const {isMobile}  = useStateContext();
    const {userLang} = useStateContext();

    const myLoader = () => {
        return member.images && urlFor(member.images).url()}

        useEffect(()=>{
        
        },[userLang])



  return (
    <div className='team-card'>
        
        <h2>{member.name}</h2>

       {member.images && <Image 
            style={{objectFit:'cover',borderRadius:"20px"
            }}
            src="vzzf" 
            height={ isMobile ? 400 : 500 } 
            width={ isMobile ? 300 : 500 } 
            loader={myLoader}
            alt={"image du musicien"}
        />}



        <div className='team-text-container'>
        
        <ComplexText texts={member.texts[userLang]} />

            { member.skill &&  
                <p>Maitrise : 
                    {member.skill[userLang]}
                </p>
            }
        </div>
       
    </div>
  )
}

export default TeamCard