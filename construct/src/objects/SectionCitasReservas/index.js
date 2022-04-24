import React from 'react';

import { content } from '../../databases/citasReservas/data';

import CitasReservas from '../../components/CitasReservas';

import './style.scss';
import './mediascreen.scss';

const SectionCitasReservas = () => {
  var data = content[0];

  return (
    <section className="section-citas_reservas-main">
      <div className="container section-citas_reservas-wrap">
        <div className="section-citas_reservas-text">
          <p>{data[0].description[0]}</p>
        </div>
        <div className="section-citas_reservas-text">
          <p>{data[0].description[1]}</p>
        </div>
        <CitasReservas />
      </div>
    </section>
  );
};

export default SectionCitasReservas;
