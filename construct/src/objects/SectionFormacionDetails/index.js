import React, { useState } from 'react';

import { details } from "./data";


import './style.scss';
import './mediascreen.scss';

const SectionFormacionDetails = (props) => {

    var formacion = props.formacion;

    var sticker = details[formacion][0].sticker;

    var descripcion = details[formacion][0].description;

    var plazas = details[formacion][0].plazas;

    var horarios = details[formacion][0].horarios;
    var maestro = details[formacion][0].maestro;
    var ubicacion = details[formacion][0].ubicacion;  

    return ( 

    <section className="section-formacion_details-main">

        <div className="container section-formacion-details-wrap">

            <div className="section-formacion_details-img-wrap">
                <img src={sticker} />
            </div>

            <div className="section-formacion_details-description-wrap">
                <p>{descripcion}</p>
            </div>

            <div className="section-formacion_details-infos-component-wrap">

                <div className="section-formacion_details-infos-component">
                    <div className="section-formacion_details-infos-component-title">
                        <img src={require('../../images/icons/mini-calendar/calendar.png')} />
                        <h4>Plazas</h4>
                    </div>
                    <div className="section-formacion_details-infos-component-content">
                        <span>{plazas}</span>
                    </div>                   
                </div>
                                
                <div className="section-formacion_details-infos-component">
                    <div className="section-formacion_details-infos-component-title">
                        <img src={require('../../images/icons/mini-calendar/calendar.png')} />
                        <h4>Horarios</h4>
                    </div>
                    <div className="section-formacion_details-infos-component-content">
                        <span>{horarios}</span>
                    </div>                   
                </div>
                            
                <div className="section-formacion_details-infos-component">
                    <div className="section-formacion_details-infos-component-title">
                        <img src={require('../../images/icons/mini-calendar/calendar.png')} />
                        <h4>Maestro</h4>
                    </div>
                    <div className="section-formacion_details-infos-component-content">
                        <span>{maestro}</span>
                    </div>                   
                </div>
                
                <div className="section-formacion_details-infos-component">
                    <div className="section-formacion_details-infos-component-title">
                        <img src={require('../../images/icons/mini-calendar/calendar.png')} />
                        <h4>Ubicación</h4>
                    </div>
                    <div className="section-formacion_details-infos-component-content">
                        <span>{ubicacion}</span>
                    </div>                   
                </div>
            
            </div>

        </div>

    </section>

     );
}
 
export default SectionFormacionDetails ;