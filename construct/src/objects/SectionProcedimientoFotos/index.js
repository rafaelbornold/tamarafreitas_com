import React, { useState } from 'react';

import { content } from "./data";

import Button from "../../components/Button";
import BigTitle from '../../components/BigTitle';
import CarouselSlidesProcedimientoFotos from "../../components/CarouselSlidesProcedimientoFotos"

import ReactPlayer from 'react-player';



import './style.scss';

const SectionProcedimientoFotos = (props) => {
    
    var procedimiento = props.procedimiento;
    var data = content[procedimiento];
    
    return ( 

    <section className="section-procedimiento_fotos-main">

        <div className="container section-procedimiento_fotos-title-wrapper">

            <div className="section-procedimiento_fotos-title">
                <BigTitle text={"FOTOS "+data[0].title}/>
            </div>

            <CarouselSlidesProcedimientoFotos procedimiento={procedimiento}/>
       
        </div>

    </section>

     );
}
 
export default SectionProcedimientoFotos ;