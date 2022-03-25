import P from 'prop-types';
import React from 'react';

import { content } from '../../databases/formaciones/contenido/data';

import BigTitle from '../../components/BigTitle';

import './style.scss';
import './mediascreen.scss';

const SectionFormacionBeneficios = (props) => {
  var formacion = props.formacion;

  var data = content[formacion];

  return (
    <section className="section-contenido-main">
      <div className="container section-contenido-wrap">
        <div className="section-contenido-title">
          <BigTitle text="CONTENIDO" />
        </div>

        <div className="section-contenido-description">
          <p>{data[0][0].description}</p>
        </div>

        <div className="section-contenido-content-wrap">
          <div className="section-contenido-content-list">
            {data[1].map((module, n) => {
              return (
                <ul key={n}>
                  <li>
                    {' '}
                    <div className="ball"></div>
                    {data[1][n].item}
                  </li>
                </ul>
              );
            })}
          </div>

          <div
            className="section-contenido-content-img"
            style={{ backgroundImage: 'url(' + data[0][0].image + ')' }}
          ></div>
        </div>
      </div>
    </section>
  );
};

SectionFormacionBeneficios.propTypes = {
  formacion: P.string,
};

export default SectionFormacionBeneficios;
