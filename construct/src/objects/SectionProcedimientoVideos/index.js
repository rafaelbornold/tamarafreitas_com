import P from 'prop-types';
import React from 'react';

import { content } from '../../databases/procedimientos/videosCarousel/data';
import { procedimientos } from '../../databases/procedimientos/data';

import BigTitle from '../../components/BigTitle';
import CarouselSlides from '../../components/CarouselSlides';

import './style.scss';

const SectionProcedimientoFotos = (props) => {
  const procedimiento = props.procedimiento;
  const procedimientoTitle = procedimientos[procedimiento].title;
  const data = content[procedimiento];

  return (
    <section className="section-procedimiento_videos-main">
      <div className="container section-procedimiento_videos-title-wrapper">
        <div className="section-procedimiento_videos-title">
          <BigTitle text={'VIDEOS ' + procedimientoTitle} />
        </div>

        <CarouselSlides
          data={data}
          cardWidth="254"
          cardHeight="308"
          cardGap="30"
          cardStyle="carousel-card-style-01"
        />
      </div>
    </section>
  );
};

SectionProcedimientoFotos.propTypes = {
  procedimiento: P.string,
};

export default SectionProcedimientoFotos;
