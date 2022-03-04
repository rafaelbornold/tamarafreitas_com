import React, { useState } from 'react';

import Button from "../../components/Button";
import BigTitle from '../../components/BigTitle';
import VideoLink from "../../videos/Tamara_videoInicial_01_original_sierra.mp4";
import CarouselSlidesVideos from "../../components/CarouselSlidesVideos"

import ReactPlayer from 'react-player';



import './style.css';
import { CarouselSlides } from '../../components/CarouselSlides/indes';

const SectionVideos = () => {
    return ( 

    <section className="videos-main">

        <div className="container videos-title-wrapper">

            <div className="videos-title">
                <BigTitle text="VIDEOS"/>
            </div>

            <div className="videos-content">
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. </p>
            </div>

            <CarouselSlides cardsData="CardsExample" />
       
        </div>

    </section>

     );
}
 
export default SectionVideos ;