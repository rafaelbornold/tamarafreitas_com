import React, { useState } from 'react';

import  { content }   from '../../databases/formaciones/queAprenderas/data';

import BigTitle from '../../components/BigTitle';
import CarouselSlides from "../../components/CarouselSlides"

import './style.scss';

const SectionFormacionQueAprenderas = (props) => {

    var formacion = props.formacion;

    const data = content[formacion];

    return ( 

    <section className="section-formacion_que_aprenderas-main">

        <div className="container section-formacion_que_aprenderas-title-wrapper">

            <div className="section-formacion_que_aprenderas-title">
                <BigTitle text="QUE APRENDERÁS"/>
            </div>

            <CarouselSlides 
                data={data} 
                cardWidth="254" 
                cardHeight="424"
                cardGap="30"
                carsStyle="carousel-card-style-02a"
                formacion={formacion}
            />
        </div>

    </section>

     );
}
 
export default SectionFormacionQueAprenderas ;