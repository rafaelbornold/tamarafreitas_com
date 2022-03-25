import React from 'react';

import './style.scss';

import HeaderMenu from '../../objects/HeaderMenu';
import FooterMenu from '../../objects/FooterMenu';
import FooterEnd from '../../objects/FooterEnd';
import HeaderSecondary from '../../objects/HeaderSecondary';
import SectionProcedimientosCards from '../../objects/SectionProcedimientosCards';

const Formaciones = () => {
  return (
    <>
      <HeaderMenu classNameIndex="menuIndexBehindMain" imgColor="color" />
      <HeaderSecondary text="PROCEDIMIENTOS" />
      <SectionProcedimientosCards />
      <FooterMenu />
      <FooterEnd text1="© 2021 Tamara Freitas Studio Academy." text2="  Reservados todos los derechos." />
    </>
  );
};

export default Formaciones;
