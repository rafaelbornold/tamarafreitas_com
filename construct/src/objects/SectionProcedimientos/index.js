import P from 'prop-types';
import React from 'react';

import { content } from '../../databases/procedimientos/data';

import BigTitle from '../../components/BigTitle';
import CarouselSlides from '../../components/CarouselSlides';

import './style.scss';

const SectionProcedimientos = (props) => {
  const data = content['Carousel'];

  var backgroundClass = !props.backgroundClass ? 'rosa-medio__branco-escuro' : props.backgroundClass;

  return (
    <section className={'procedimientos-main ' + backgroundClass}>
      <div className="container procedimientos-title-wrapper">
        <div className="procedimientos-title">
          <BigTitle text="PROCEDIMIENTOS Y METODOS" />
        </div>

        <div className="procedimientos-content">
          <p>
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.{' '}
          </p>
        </div>

        <CarouselSlides
          data={data}
          cardWidth="254"
          cardHeight="411"
          cardGap="30"
          cardStyle="carousel-card-style-04"
        />
      </div>
    </section>
  );
};

SectionProcedimientos.propTypes = {
  backgroundClass: P.string,
};

export default SectionProcedimientos;
