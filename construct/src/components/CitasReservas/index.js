// import P from 'prop-types';
import React from 'react';
import { content } from '../../databases/citasReservas/data';
import CitasReservasCard from './CitasReservasCard';

import './style.scss';
import './mediascreen.scss';

const data = content[0];

const CitasResercas = () => {
  return (
    <div className="component-CitasResercas-wrap">
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
  );
};

export default CitasResercas;
