import React,{useState,useEffect} from 'react'
import Image from 'next/image'
import { urlFor } from '@/Utils/sanity/sanityClient'
import { useStateContext } from '@/context/StateContext'
import ComplexText from '../Ui/ComplexText'

const TeamCard = ({member}) => {

    const {isMobile}  = useStateContext();
    const {userLang} = useStateContext();

    const [tradText, setTradText] = useState()

    const myLoader = () => {
        return member.images && urlFor(member.images).url()}


        useEffect(()=>{

            setTradText(userLang.includes('fr') ? member.text 
            : userLang.includes('de') ? member.textDe
            : member.textEn)
        },[tradText])



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
        
        { tradText && <ComplexText texts={tradText} />}

{/* 
        {member.desc.map((p,i)=>{
           return <p key={i}>{p}</p>
        })} */}
            { member.skillz &&  <p>Maitrise : {
            //member.skillz
            userLang.includes('fr') ? member.skillz
        : userLang.includes('de') ? member.skillzDe
        : member.skillzEn
            }
            </p>}
        </div>

       
    </div>
  )
}

export default TeamCard