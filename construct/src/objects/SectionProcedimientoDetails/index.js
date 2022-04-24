import P from 'prop-types';
import React from 'react';

import { content } from '../../databases/procedimientos/details/data';

import BigTitle from '../../components/BigTitle';

import './style.scss';
import './mediascreen.scss';

const SectionProcedimientoDetails = (props) => {
  var procedimiento = props.procedimiento;
  var data = content[procedimiento];

  return (
    <section className="section-SectionProcedimientoDetails-main">
      <div className="section-SectionProcedimientoDetails-bigtitle-01-wrap">
        <BigTitle text={data[0].title} />
      </div>

      <div className="container section-SectionProcedimientoDetails-wrapper">
        <div className="section-SectionProcedimientoDetails-img">
          <div className="image-section-SectionProcedimientoDetails-wrapper">
            <div
              className="image-section-SectionProcedimientoDetails-picture"
              style={{ backgroundImage: 'url(' + data[0].image + ')' }}
            ></div>
          </div>
        </div>

        <div className="section-SectionProcedimientoDetails-content-up">
          <div className="section-SectionProcedimientoDetails-bigtitle-02-wrap">
            <BigTitle text={data[0].title} />
          </div>
          <article className="article-SectionProcedimientoDetails-wrap">{data[0].description_up}</article>
        </div>
        <div className="section-SectionProcedimientoDetails-content-down">{data[0].description_down}</div>
      </div>
    </section>
  );
};

SectionProcedimientoDetails.propTypes = {
  procedimiento: P.string,
};

export default SectionProcedimientoDetails;
