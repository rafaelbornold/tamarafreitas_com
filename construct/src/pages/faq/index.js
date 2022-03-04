import React, { useState } from 'react';
 
import './style.scss';

import HeaderMenu from "../../objects/HeaderMenu";
import FooterMenu from '../../objects/FooterMenu';
import FooterEnd from '../../objects/FooterEnd';
import HeaderSecondary from '../../objects/HeaderSecondary';
import SectionCursos from '../../objects/SectionCursos';
import SectionVideos from '../../objects/SectionVideos';
import SectionReviews from '../../objects/SectionReviews';
import SectionFAQ_faq from '../../objects/SectionFAQ_faq';
import SectionProcedimientos from '../../objects/SectionProcedimientos';



const FAQ = () => {

  return (
    <>    
    <HeaderMenu classNameIndex="menuIndexBehindMain" imgColor="color" />
    <HeaderSecondary text="PREGUNTAS FRECUENTES"/>
    <SectionFAQ_faq />
    <SectionVideos />
    <SectionCursos />
    <SectionProcedimientos />
    <SectionReviews />
    <FooterMenu />
    <FooterEnd text1="© 2021 Tamara Freitas Studio Academy." text2="  Reservados todos los derechos."/>
    </>
  );
}

export default FAQ;
