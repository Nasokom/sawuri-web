import React from 'react'
import Link from 'next/link'
import { useStateContext } from '@/context/StateContext';

const Banner = ({liens}) => {

    const {userLang} = useStateContext();

  return (
    <div className='footer-banner'>

        <div //style={{overflow:'hidden'}}
        >
            <h2 className='footer-banner-title'> 
            {userLang.includes('fr') ? 'Decouvrez' : userLang.includes('de')? 'entdecken' : 'Discover'}
            </h2>
        </div>


<div className='btn-container'>

        {liens.map((lien,i)=>{
            return(
                
                <Link href={`/${lien.path}`} key={i}>
                    <button className='footer-banner-btn' >
                        {lien.name}
                    </button>
                </Link>
                )
                
            })}
</div>
 
    </div>
  )
}

export default Banner