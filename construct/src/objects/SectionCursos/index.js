import React from 'react';

import { content } from '../../databases/formaciones/home/data';

import BigTitle from '../../components/BigTitle';
import CarouselSlides from '../../components/CarouselSlides';

import './style.scss';

const SectionCursos = () => {
  const data = content['Carousel'];

  return (
    <section className="cursos-main">
      <div className="container cursos-title-wrapper">
        <div className="cursos-title">
          <BigTitle text="CURSOS Y FORMACIOINES" />
        </div>

        <div className="cursos-content">
          <p style={{ color: 'red' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia.
          </p>
        </div>

        <CarouselSlides
          data={data}
          cardWidth="254"
          cardHeight="424"
          cardGap="30"
          cardStyle="carousel-card-style-02"
        />
      </div>
    </section>
  );
};

export default SectionCursos;
