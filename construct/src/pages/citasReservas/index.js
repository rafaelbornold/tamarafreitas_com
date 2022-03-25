import React from 'react';

import './style.scss';

import HeaderMenu from '../../objects/HeaderMenu';
import FooterMenu from '../../objects/FooterMenu';
import FooterEnd from '../../objects/FooterEnd';
import HeaderSecondary from '../../objects/HeaderSecondary';
import SectionProximosCursos from '../../objects/SectionProximosCursos';
import SectionEstructura from '../../objects/SectionEstructura';
import SectionReviews from '../../objects/SectionReviews';
import SectionCitasReservas from '../../objects/SectionCitasReservas';
import SectionFAQ_citasReservas from '../../objects/SectionFAQ_citasReservas';

const Formaciones = () => {
  return (
    <>
      <HeaderMenu classNameIndex="menuIndexBehindMain" imgColor="color" />
      <HeaderSecondary text="CITAS Y RESERVAS" />
      <SectionCitasReservas />
      <SectionProximosCursos />
      <SectionFAQ_citasReservas />
      <SectionEstructura />
      <SectionReviews />
      <FooterMenu />
      <FooterEnd text1="© 2021 Tamara Freitas Studio Academy." text2="  Reservados todos los derechos." />
    </>
  );
};

export default Formaciones;
