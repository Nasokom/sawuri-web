import React, {useEffect, useRef, useState} from 'react'
import { VideoJS } from './VideoJs';
import { client } from '@/Utils/sanity/sanityClient';

const VideoComponent = ({ path}) => {

  const playerRef = useRef(null);

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    sources: [{
      src: `/videos/${path}.mp4`,
      type: 'video/mp4'
    }]
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on('waiting', () => {
      videojs.log('player is waiting');
    });

    player.on('dispose', () => {
      videojs.log('player will dispose');
    });
  };

    return (
        <div>
          <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
        </div>
    )
}

export default VideoComponent;
