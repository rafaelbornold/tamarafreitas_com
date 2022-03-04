import React, { useState } from 'react';
 
import './style.scss';

import HeaderMenu from "../../objects/HeaderMenu";
import FooterMenu from '../../objects/FooterMenu';
import FooterEnd from '../../objects/FooterEnd';
import HeaderSecondary from '../../objects/HeaderSecondary';
import SectionReviews from '../../objects/SectionReviews';
import SectionProximosCursos from '../../objects/SectionProximosCursos';
import SectionFormacionDetails from '../../objects/SectionFormacionDetails';
import SectionMaestro from '../../objects/SectionMaestro';
import SectionFormacionBeneficios from '../../objects/SectionFormacionBeneficios';
import SectionFormacionContenido from '../../objects/SectionFormacionContenido';
import SectionFormacionKitCompleto from '../../objects/SectionFormacionKitCompleto';
import SectionFormacionContenidoDelPrograma from '../../objects/SectionFormacionContenidoDelPrograma';
import SectionFormacionQueAprenderas from '../../objects/SectionFormacionQueAprenderas';
import SectionFAQ_formaciones from '../../objects/SectionFAQ_formaciones';


const FormacionDetails = (props) => {

  var formacion = props.formacion;

  switch (formacion){

    case "LashLiftingPro": 
      var HeaderSecondary_text = "FORMACIÓN - LASHLIFTING PRO";
      break;

    case "IntensiveMicroblading": 
      var HeaderSecondary_text = "FORMACIÓN - INTENSIVE MICROBLADING";
      break;

    case "AdvancedMicroblading": 
      var HeaderSecondary_text = "FORMACIÓN - ADVANCED MICROBLADING";
      break;

  }

  return (
    <>    
    <HeaderMenu classNameIndex="menuIndexBehindMain" imgColor="color" />
    <HeaderSecondary text={HeaderSecondary_text}/>
    <SectionFormacionDetails formacion={props.formacion}/>
    <SectionMaestro />
    <SectionFormacionBeneficios formacion={props.formacion} />
    <SectionFormacionContenido formacion={props.formacion} />
    <SectionFormacionKitCompleto formacion={props.formacion} />
    <SectionFormacionContenidoDelPrograma formacion={props.formacion} />
    <SectionFormacionQueAprenderas formacion={props.formacion} />
    <SectionFAQ_formaciones formacion={props.formacion} />
    <SectionProximosCursos />
    <SectionReviews />
    <FooterMenu />
    <FooterEnd text1="© 2021 Tamara Freitas Studio Academy." text2="  Reservados todos los derechos."/>
    </>
  );
}

export default FormacionDetails;
