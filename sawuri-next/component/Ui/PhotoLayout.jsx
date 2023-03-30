import React from 'react'
import ImageBox from './ImageBox'

const PhotoLayout = ({photos}) => {
  return (
    <div className='photo-layout'
    >
        {photos.map((photo,i)=>{
          return <ImageBox data={photo} key={i}/>
        })}
    </div>
  )
}

export default PhotoLayout