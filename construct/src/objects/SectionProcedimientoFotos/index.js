import P from 'prop-types';
import React from 'react';

import { content } from '../../databases/procedimientos/fotosCarousel/data';
import { procedimientos } from '../../databases/procedimientos/data';

import BigTitle from '../../components/BigTitle';
import CarouselSlides from '../../components/CarouselSlides';

import './style.scss';

const SectionProcedimientoFotos = (props) => {
  const procedimiento = props.procedimiento;
  const procedimientoTitle = procedimientos[procedimiento].title;
  const data = content[procedimiento];

  return (
    <section className="section-procedimiento_fotos-main">
      <div className="container section-procedimiento_fotos-title-wrapper">
        <div className="section-procedimiento_fotos-title">
          <BigTitle text={'FOTOS ' + procedimientoTitle} />
        </div>

        <CarouselSlides
          data={data}
          cardWidth="254"
          cardHeight="424"
          cardGap="30"
          cardStyle="carousel-card-style-00"
        />
      </div>
    </section>
  );
};

SectionProcedimientoFotos.propTypes = {
  procedimiento: P.string,
};

export default SectionProcedimientoFotos;
