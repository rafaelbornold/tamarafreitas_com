import React, { useState } from 'react';
 
import './style.scss';

import HeaderMenu from "../../objects/HeaderMenu";
import FooterMenu from '../../objects/FooterMenu';
import FooterEnd from '../../objects/FooterEnd';
import HeaderSecondary from '../../objects/HeaderSecondary';
import SectionSobreDetails from '../../objects/SectionSobreDetails';
import SectionProcedimientos from '../../objects/SectionProcedimientos';
import SectionReviews from '../../objects/SectionReviews';
import SectionStatisticalNumbers from '../../objects/SectionStatisticalNumbers';
import SectionMission from '../../objects/SectionMission';



const Sobre = () => {

  return (
    <>    
    <HeaderMenu classNameIndex="menuIndexBehindMain" imgColor="color" />
    <HeaderSecondary text="ACERCA DE TAMARA FREITAS"/>
    <SectionSobreDetails />
    <SectionMission />
    <SectionReviews />
    <SectionProcedimientos backgroundClass="branco-escuro__rosa-medio" />
    <SectionStatisticalNumbers />
    <FooterMenu />
    <FooterEnd text1="© 2021 Tamara Freitas Studio Academy." text2="  Reservados todos los derechos."/>
    </>
  );
}

export default Sobre;
