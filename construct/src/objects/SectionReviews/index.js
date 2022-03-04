import React, { useState } from 'react';

import BigTitle from '../../components/BigTitle';
import CarouselSlidesReviews from "../../components/CarouselSlidesReviews"

import './style.css';

const SectionReviews = () => {
    return ( 

    <section className="reviews-main">

        <div className="reviews-title-wrapper">

            <div className="reviews-title">
                <BigTitle text="TESTIMONIOS"/>
            </div>

            <CarouselSlidesReviews />
       
        </div>

    </section>

     );
}
 
export default SectionReviews ;