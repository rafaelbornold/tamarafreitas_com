import React, { useState } from 'react';

import  data   from './data';

import BigTitle from '../../components/BigTitle';
import CarouselSlides from "../../components/CarouselSlides"


import './style.scss';

const SectionCursos = () => {
    return ( 

    <section className="cursos-main">

        <div className="container cursos-title-wrapper">

            <div className="cursos-title">
                <BigTitle text="CURSOS Y FORMACIOINES"/>
            </div>

            <div className="cursos-content">
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. </p>
            </div>

            <CarouselSlides 
                data={data} 
                cardWidth="254" 
                cardHeight="424"
                cardGap="30"
                carsStyle="carousel-card-style-01"
            />
       
        </div>

    </section>

     );
}
 
export default SectionCursos ;