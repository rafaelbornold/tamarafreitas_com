import React from 'react';

import HeaderMenu from '../../objects/HeaderMenu';
import HeaderSecondary from '../../objects/HeaderSecondary';
import MainLinks from '../../objects/MainLinks';
import FooterSocialMedias from '../../objects/FooterSocialMedias';
import FooterMenu from '../../objects/FooterMenu';
import FooterEnd from '../../objects/FooterEnd';
import HorizontalSeparator from '../../components/HorizontalSeparator';

const Links = () => {
  return (
    <>
      <HeaderMenu />
      <HeaderSecondary text="BIENVENIDA" />
      <HorizontalSeparator />
      <MainLinks />
      <FooterSocialMedias text="SÍGUENOS EN LAS REDES SOCIALES" />
      <FooterMenu />
      <FooterEnd text1="© 2021 Tamara Freitas Studio Academy." text2="  Reservados todos los derechos." />
    </>
  );
};

export default Links;
