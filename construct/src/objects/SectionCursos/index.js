import React, { useState } from 'react';

import BigTitle from '../../components/BigTitle';
import CarouselSlidesCursos from "../../components/CarouselSlidesCursos"


import './style.css';

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

            <CarouselSlidesCursos />
       
        </div>

    </section>

     );
}
 
export default SectionCursos ;