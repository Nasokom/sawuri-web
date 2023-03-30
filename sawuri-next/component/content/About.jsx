import React from 'react'
import AboutSection from './AboutSection'

const About= ({datas}) => {

  return (
    <div className='about'>

      {datas.map((data,i)=>{
        return <AboutSection datas={data} key={i}/>
      })}
        
    </div>
  )
}

export default About