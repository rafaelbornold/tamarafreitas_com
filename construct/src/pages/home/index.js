import React from 'react';

import './style.css';

import HeaderMenu from '../../objects/HeaderMenu';
import FooterMenu from '../../objects/FooterMenu';
import FooterEnd from '../../objects/FooterEnd';
import ArticleHomeVideo from '../../contents/ArticleHomeVideo';
import HorizontalSeparator from '../../components/HorizontalSeparator';
import SectionSobreResume from '../../objects/SectionSobreResume';
import SectionEstructura from '../../objects/SectionEstructura';
import SectionCursos from '../../objects/SectionCursos';
import SectionVideos from '../../objects/SectionVideos';
import SectionBoletinInformativo from '../../objects/SectionBoletinInformativo';
import SectionProcedimientos from '../../objects/SectionProcedimientos';
import SectionProximosCursos from '../../objects/SectionProximosCursos';
import SectionReviews from '../../objects/SectionReviews';
import SectionStatisticalNumbers from '../../objects/SectionStatisticalNumbers';

const Home = () => {
  return (
    <>
      <HeaderMenu
        classNameIndex=""
        imgColor="white"
      />
      <HeaderMenu
        classNameIndex="menuIndexBehindMain"
        imgColor="color"
      />
      <ArticleHomeVideo />
      <HorizontalSeparator />
      <SectionSobreResume />
      <SectionEstructura />
      <SectionCursos />
      <SectionVideos />
      <SectionBoletinInformativo />
      <SectionProcedimientos />
      <SectionProximosCursos />
      <SectionReviews />
      <SectionStatisticalNumbers />
      <FooterMenu />
      <FooterEnd
        text1="© 2021 Tamara Freitas Studio Academy."
        text2="  Reservados todos los derechos."
      />
    </>
  );
};

export default Home;
