import React, { useState } from 'react';

import Button from "../../components/Button";
import BigTitle from '../../components/BigTitle';
import CarouselSlidesEquipo from "../../components/CarouselSlidesEquipo"


import './style.scss';

const SectionEquipo = () => {
    return ( 

    <section className="equipo-main">

        <div className="container equipo-title-wrapper">

            <div className="equipo-title">
                <BigTitle text="Conoce a nuestro equipo"/>
            </div>

            <div className="equipo-content">
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>

            <CarouselSlidesEquipo />
       
            {/* <div className="section_equipo-wrapper-button">
                <Button name="btn-04" width="180px" type="route" text="VER EL EQUIPO" link="/something"/>
            </div> */}

        </div>

    </section>

     );
}
 
export default SectionEquipo ;