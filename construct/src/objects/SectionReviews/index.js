import React, { useState } from 'react';

import  { content }   from '../../databases/reviews/data';

import BigTitle from '../../components/BigTitle';
import CarouselSlides from "../../components/CarouselSlides"


import './style.scss';

const SectionReviews = () => {

    const data = content[0];

    return ( 

    <section className="reviews-main">

        <div className="reviews-title-wrapper">

            <div className="reviews-title">
                <BigTitle text="TESTIMONIOS"/>
            </div>

            <CarouselSlides 
                data={data} 
                cardWidth="290" 
                cardHeight="335"
                maxWidthSlide="100%"
                cardGap="0"
                carsStyle="carousel-card-style-01"
            />

       
        </div>

    </section>

     );
}
 
export default SectionReviews ;