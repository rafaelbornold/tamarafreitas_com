import React, { useState } from 'react';
 
import './style.scss';

import HeaderMenu from "../../objects/HeaderMenu";
import FooterMenu from '../../objects/FooterMenu';
import FooterEnd from '../../objects/FooterEnd';
import HeaderSecondary from '../../objects/HeaderSecondary';
import SectionReviews from '../../objects/SectionReviews';
import SectionProximosCursos from '../../objects/SectionProximosCursos';
import SectionCursos from '../../objects/SectionCursos';
import SectionProcedimientoDetails from '../../objects/SectionProcedimientoDetails';
import SectionProcedimientoFotos from '../../objects/SectionProcedimientoFotos';
import SectionProcedimientoVideos from '../../objects/SectionProcedimientoVideos';
import SectionFAQ_procedimientos from '../../objects/SectionFAQ_procedimientos';


const ProcedimientoDetails = (props) => {

  var procedimiento = props.procedimiento;

  switch (procedimiento){

    case "DepilacionConHilo": 
      var HeaderSecondary_text = "PROCEDIMIENTOS - Depilación con Hilo";
      break;

    case "DisenoDeCejas": 
      var HeaderSecondary_text = "PROCEDIMIENTOS - Diseño de Cejas";
      break;

    case "Pestanas": 
      var HeaderSecondary_text = "PROCEDIMIENTOS - Pestañas";
      break;


    case "Micropigmentacion": 
      var HeaderSecondary_text = "PROCEDIMIENTOS - Micropigmentación";
      break;


    case "Microblading": 
      var HeaderSecondary_text = "PROCEDIMIENTOS - Microblading";
      break;

  }

  return (
    <>    
    <HeaderMenu classNameIndex="menuIndexBehindMain" imgColor="color" />
    <HeaderSecondary text={HeaderSecondary_text}/>
    <SectionProcedimientoDetails procedimiento={procedimiento} />
    <SectionProcedimientoFotos procedimiento={procedimiento} />
    <SectionProcedimientoVideos procedimiento={procedimiento} />
    <SectionFAQ_procedimientos procedimiento={procedimiento} />
    <SectionReviews />
    <SectionCursos />
    <SectionProximosCursos />
    <FooterMenu />
    <FooterEnd text1="© 2021 Tamara Freitas Studio Academy." text2="  Reservados todos los derechos."/>
    </>
  );
}

export default ProcedimientoDetails;
