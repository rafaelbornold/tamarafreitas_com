import React from 'react';

import './style.scss';

import HeaderMenu from '../../objects/HeaderMenu';
import FooterMenu from '../../objects/FooterMenu';
import FooterEnd from '../../objects/FooterEnd';
import HeaderSecondary from '../../objects/HeaderSecondary';
import SectionFormaciones from '../../objects/SectionFormaciones';
import SectionProximosCursos from '../../objects/SectionProximosCursos';
import SectionEstructura from '../../objects/SectionEstructura';
import SectionReviews from '../../objects/SectionReviews';

const Formaciones = () => {
  return (
    <>
      <HeaderMenu classNameIndex="menuIndexBehindMain" imgColor="color" />
      <HeaderSecondary text="FORMACIONES" />
      <SectionFormaciones />
      <SectionProximosCursos />
      <SectionEstructura />
      <SectionReviews />
      <FooterMenu />
      <FooterEnd text1="© 2021 Tamara Freitas Studio Academy." text2="  Reservados todos los derechos." />
    </>
  );
};

export default Formaciones;
