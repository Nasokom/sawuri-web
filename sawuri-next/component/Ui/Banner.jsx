import React from 'react'
import Link from 'next/link'
import { useStateContext } from '@/context/StateContext';

const Banner = ({liens}) => {

    const {userLang} = useStateContext();

  return (
    <div className='footer-banner'>

        <h2> 
        {userLang.includes('fr') ? 'Decouvrez' : userLang.includes('de')? 'entdecken' : 'Discover'}
        </h2>


<div className='btn-container'>

        {liens.map((lien,i)=>{
            return(
                
                
                <Link href={`/${lien.path}`} key={i}>
                    <button >
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