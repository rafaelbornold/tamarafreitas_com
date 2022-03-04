import React, { useState } from 'react';

import './style.scss';
import './mediascreen.scss';


import Button from '../../components/Button';
import MiniCalendar from "../../images/icons/mini-calendar/calendar.png";

import ContentHeader from './ContentHeader';
import ImageModule from '../ImageModules';


const FormacionModule = (props) => {


    var moduleTitle = props.title;
    var moduleSticker = props.sticker;
    var moduleImage = props.image;
    var moduleDescription = props.description;
    var moduleAvailability = props.availability;
    var moduleLinkButtonVerMas = props.linkVerMas;;
    var moduleLinkButtonComprar = props.linkComprar;

    return (  

        <article className="component_formacion-module">

        <div className="component_formacion-module-content-header2-wrap">
            <ContentHeader 
                title= {moduleTitle}
                titleSize="20px" 
                sticker={moduleSticker}/>
        </div>

        <div className="component_formacion-module-pic-wrap">

            <ImageModule src={moduleImage} />
            
        </div>
        <div className="component_formacion-module-content-wrap">
            
            <div className="component_formacion-module-content-header1-wrap">
                <ContentHeader 
                    title={moduleTitle}
                    titleSize="26px" 
                    sticker={moduleSticker}/>
            </div>

            <div className="component_formacion-module-content-description-wrap">
                <p className="component_formacion-module-content-description">
                    {moduleDescription}
                </p>
            </div>

            <div className="component_formacion-module-content-footer-wrap">
                <div className="component_formacion-module-content-footer-plazas">
                    <img src={MiniCalendar}></img> <span> {moduleAvailability} </span>
                </div>
                <div className="component_formacion-module-content-footer-buttons">
                    <Button name="btn-04" width="140px" type="route" text="VER MÁS" link={moduleLinkButtonVerMas}/>
                    <Button name="btn-03" width="140px" type="redirect" text="COMPRAR" target="_blank" link={moduleLinkButtonComprar}/>
                </div>

            </div>


        </div>

    </article>

    );
}
 
export default FormacionModule;
