import React from 'react';

import { content } from '../../databases/procedimientos/cards/data';

import ProcedimientoCard from '../../components/ProcedimientoCard';

import './style.scss';

const SectionProcedimientosCards = () => {
  var data = content['procedimientos'];

  return (
    <section className="section-procedimientos_cards-main">
      <div className="container section-procedimientos_cards-content-wrapper">
        <div className="section-procedimientos_cards-description">
          <p> {data[0].description} </p>
        </div>

        <div className="divAntes">
          <div className="section-procedimientos_cards-card-wrap">
            {data[1].map((module, n) => {
              return (
                <ProcedimientoCard
                  key={n}
                  procedimiento={data[1][n].procedimiento}
                  image={data[1][n].image}
                  title={data[1][n].title}
                  items={data[1][n].items}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionProcedimientosCards;
