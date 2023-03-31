import React,{useEffect,useRef, useState} from 'react'
import ImageBox from '../Ui/ImageBox'

const AboutSection = ({datas}) => {
  const {images, para } = datas;
  const main = useRef(null);
  const [utilHeight,setUtilHeight] = useState({
    container:0,img:0
  })
  console.log(images)

useEffect(()=>{
  const height = main.current.querySelector('.text-container').offsetHeight;
  const imgHeigth = height/images.length;
  setUtilHeight({container:height, img:imgHeigth})

},[])

  return (
    <div className='about-section' ref={main}>
        <div className='text-container'>
            {para.map((p,i)=>{
                return <p key={i}>{p}</p>
            })}
        </div>
        <div className='about-img-layout' style={{height:`${utilHeight.container}px`}}>
        {images.map((img,i)=>{
                return( 
                <div className='about-img-limiter' key={i}style={{height:`${utilHeight.img}px`}} >  
                  <ImageBox data={img} key={i}/>
                </div>
                )
            })}
        </div>
    </div>
  )
}

export default AboutSection