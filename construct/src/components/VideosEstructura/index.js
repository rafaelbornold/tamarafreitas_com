import React from 'react';
import ReactPlayer from 'react-player';

import ImagePreLoad from '../../videos/video_preload.jpg';
import VideoLink from '../../videos/Tamara_videoInicial_01_original_sierra.mp4';

import './style.css';

const VideosEstructura = () => {
  return (
    <article>
      <div className="estructura-video-container">
        <div className="estructura-display">
          <div className="estructura-wrapper">
            <div className="estructura-video_wrap_border">
              <div className="estructura-video_wrap">
                <ReactPlayer
                  url={VideoLink}
                  className="react-player"
                  playing
                  loop
                  muted
                  playsinline
                  width="100%"
                  height="100%"
                />
                <img id="estructura-video_cover" src={ImagePreLoad} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default VideosEstructura;
