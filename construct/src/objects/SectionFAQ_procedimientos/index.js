import P from 'prop-types';
import React from 'react';

import { content } from '../../databases/procedimientos/faq/data';

import BigTitle from '../../components/BigTitle';
import ListShowHide from '../../components/ListShowHide';

import './style.scss';

const SectionFAQ_formaciones = (props) => {
  var procedimiento = props.procedimiento;

  var data = content[procedimiento];

  return (
    <section className="section-FAQ_procedimientos-main">
      <div className="container section-FAQ_procedimientos-wrap">
        <div className="section-FAQ_procedimientos-title">
          <BigTitle text="PREGUNTAS FRECUENTES" />
        </div>

        <div className="section-FAQ_procedimientos-list-wrap">
          <div className="section-FAQ_procedimientos-list-content">
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
  procedimiento: P.string,
};

export default SectionFAQ_formaciones;
