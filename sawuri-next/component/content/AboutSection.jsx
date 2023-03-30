import React from 'react'

const AboutSection = ({datas}) => {
const {images, para } = datas

  return (
    <div className='about-section'>
        <div className='text-container'>
            {para.map((p,i)=>{
                return <p key={i}>{p}</p>
            })}
        </div>
        <div className='image-container'></div>
    </div>
  )
}

export default AboutSection