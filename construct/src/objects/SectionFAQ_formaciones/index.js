import P from 'prop-types';
import React from 'react';

import { content } from '../../databases/formaciones/faq/data';

import BigTitle from '../../components/BigTitle';
import ListShowHide from '../../components/ListShowHide';

import './style.scss';

const SectionFAQ_formaciones = (props) => {
  var formacion = props.formacion;

  var data = content[formacion];

  return (
    <section className="section-FAQ_formaciones-main">
      <div className="container section-FAQ_formaciones-wrap">
        <div className="section-FAQ_formaciones-title">
          <BigTitle text="PREGUNTAS FRECUENTES" />
        </div>

        <div className="section-FAQ_formaciones-list-wrap">
          <div className="section-FAQ_formaciones-list-content">
            {data.map((module, n) => {
              return (
                <ListShowHide
                  key={n + 1}
                  number={n + 1}
                  title={data[n].title}
                  description={data[n].description}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

SectionFAQ_formaciones.propTypes = {
  formacion: P.string,
};

export default SectionFAQ_formaciones;
