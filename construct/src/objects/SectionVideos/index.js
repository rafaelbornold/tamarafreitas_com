import React, { useState } from 'react';

import './style.scss';

import  { content }   from '../../databases/videos/data';

import BigTitle from '../../components/BigTitle';
import CarouselSlides from "../../components/CarouselSlides"


const SectionVideos = () => {

    const data = content["Carousel"];

    return ( 

    <section className="videos-main">

        <div className="container videos-title-wrapper">

            <div className="videos-title">
                <BigTitle text="VIDEOS"/>
            </div>

            <div className="videos-content">
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. </p>
            </div>

            <CarouselSlides 
                data={data} 
                cardWidth="254" 
                cardHeight="308"
                cardGap="30"
                carsStyle="carousel-card-style-01"
            />
        </div>

    </section>

     );
}
 
export default SectionVideos ;