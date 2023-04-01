import React,{useEffect,useRef, useState} from 'react'
import ImageBox from '../Ui/ImageBox'

const AboutSection = ({datas}) => {
  const {images, para } = datas;
  const main = useRef(null);
  const [utilHeight,setUtilHeight] = useState({
    container:0,img:0
  })
//  console.log(images)

useEffect(()=>{
  setTimeout(()=>{
    const height = main.current.querySelector('.text-container').offsetHeight;
    const imgHeigth = height/images.length;
    setUtilHeight({container:height, img:imgHeigth})
  },1000)
},[])

  return (
    <div className='about-section' ref={main}>
        <div className='text-container'>
            {para.map((p,i)=>{
                return (
                  <div className='text-box' key={i}>
                    <p>{p}</p>
                  </div>
                )
            })}
        </div>
        <div className='about-img-layout' style={{height:`${utilHeight.container}px`}}>
        {images.map((img,i)=>{
                return( 
                <div className='about-img-limiter' key={i} style={{height:`${utilHeight.img}px`}} >  
                  <ImageBox data={img} key={i} axesRanges={{max:80,min:20}} rndmZidx={false}/>
                </div>
                )
            })}
        </div>
    </div>
  )
}

export default AboutSection