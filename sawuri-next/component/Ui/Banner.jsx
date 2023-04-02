import React from 'react'
import Link from 'next/link'

const Banner = ({liens}) => {


  return (
    <div className='footer-banner'>

        <h2> Decouvrez</h2>


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