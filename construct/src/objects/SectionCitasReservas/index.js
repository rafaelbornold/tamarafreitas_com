import React from 'react';

import { content } from '../../databases/citasReservas/data';

import CitasReservasCard from '../../components/CitasReservasCard';

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

        {data[1].map((module, n) => {
          return (
            <CitasReservasCard
              key={n}
              title={data[1][n].title}
              texts={data[1][n].texts}
              buttonText={data[1][n].button.text}
              buttonLink={data[1][n].button.link}
            />
          );
        })}
      </div>
    </section>
  );
};

export default SectionCitasReservas;
