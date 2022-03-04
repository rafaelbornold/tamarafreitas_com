import React, { useState } from 'react';
import ReactPlayer from 'react-player';

import Button from "../../components/Button";

import ImagePreLoad from "../../videos/video_preload.jpg";
import VideoLink from "../../videos/Tamara_videoInicial_01_original_sierra.mp4";


import './style.css';

const HomeBgVideo = () => {

    return (  

        <article>
            <div className="video-container">

                <div className="home-video-content">
                   
                    <div className="logo"></div>

                    <div className="wrapper-button">
                        <Button name="btn-02" width="160px" type="route" text="LOREM IPSUM" link=""/>
                        <Button name="btn-01" width="160px" type="route" text="LOREM IPSUM" link=""/>
                    </div>
                    
                </div>

                <div className="display2">
                        <div className="wrapper A3">
                            <div className="video_wrap_border">
                                <div className="video_wrap">

                                <ReactPlayer
                                    url={VideoLink}
                                    className='react-player'
                                    playing loop muted playsinline
                                    width='100%'
                                    height='100%'
                                    />
                                    <img id="video_cover" src={ImagePreLoad} />
                                    
                                </div>
                            </div>     
                        </div>
                </div>
            </div>
        </article>

        );
}
 
export default HomeBgVideo;