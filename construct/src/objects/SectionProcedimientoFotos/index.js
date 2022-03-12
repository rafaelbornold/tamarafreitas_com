import React, { useState } from 'react';

import { content } from "./data";

import Button from "../../components/Button";
import BigTitle from '../../components/BigTitle';
import CarouselSlides from "../../components/CarouselSlides"

import './style.scss';

const SectionProcedimientoFotos = (props) => {
    
    var procedimiento = props.procedimiento;
    var data = content["data"];

    return ( 

    <section className="section-procedimiento_fotos-main">

        <div className="container section-procedimiento_fotos-title-wrapper">

            <div className="section-procedimiento_fotos-title">
                <BigTitle text={"FOTOS "+ procedimiento}/>
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
 
export default SectionProcedimientoFotos ;