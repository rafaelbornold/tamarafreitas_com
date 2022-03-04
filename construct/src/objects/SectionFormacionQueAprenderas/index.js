import React, { useState } from 'react';

import BigTitle from '../../components/BigTitle';
import CarouselSlidesQueAprenderas from "../../components/CarouselSlidesQueAprenderas"


import './style.scss';

const SectionCursos = (props) => {
    return ( 

    <section className="section-formacion_que_aprenderas-main">

        <div className="container section-formacion_que_aprenderas-title-wrapper">

            <div className="section-formacion_que_aprenderas-title">
                <BigTitle text="QUE APRENDERÁS"/>
            </div>

            <CarouselSlidesQueAprenderas formacion={props.formacion} />
       
        </div>

    </section>

     );
}
 
export default SectionCursos ;