import React, { useState } from 'react';

import BigTitle from '../../components/BigTitle';
import VideosEstructura from '../../components/VideosEstructura';

import ReactPlayer from 'react-player';

import VideoLink from "../../videos/Tamara_videoInicial_01_original_sierra.mp4";


import './style.css';

const SectionEstructura = () => {
    return ( 

    <section className="estructura-main">

        <div className="container estructura-title-wrapper">

            <div className="estructura-title">
                <BigTitle text="ESTRUCTURA DE LA ACADEMIA"/>
            </div>

            <div className="estructura-videos-wrapper">
                <div className="estructura-video-left">

                    <ReactPlayer
                        url={VideoLink}
                        className='react-player'
                        loop muted playsinline controls
                        width='100%'
                        height='100%'
                        />

                </div>

                <div className="estructura-video-right">

                    <ReactPlayer
                            url={VideoLink}
                            className='react-player'
                            loop muted playsinline controls
                            width='100%'
                            height='100%'
                            />

                </div>
            </div>

            <div className="estructura-content">
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. </p>
            </div>

       
        </div>

    </section>

     );
}
 
export default SectionEstructura ;