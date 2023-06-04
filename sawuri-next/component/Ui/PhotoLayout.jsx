import React from 'react'
import ImageBox from './ImageBox'

const PhotoLayout = ({photos}) => {

  return (
    <div className='photo-layout'
    >
        {photos.map((photo,i)=>{
          return <ImageBox data={photo.image}  axesRanges={{max:90,min:10}} key={i} rndmZidx={true}/>
        })}
    </div>
  )
}

export default PhotoLayout