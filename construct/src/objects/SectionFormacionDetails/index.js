import P from 'prop-types';
import React from 'react';

import { formaciones } from '../../databases/formaciones/data';

import './style.scss';
import './mediascreen.scss';

const SectionFormacionDetails = (props) => {
  var formacion = props.formacion;

  var sticker = formaciones[formacion].sticker;

  var descripcion = formaciones[formacion].fullDescription;

  var plazas = formaciones[formacion].plazas;

  var horarios = formaciones[formacion].hora;
  var maestro = formaciones[formacion].maestro;
  var ubicacion = formaciones[formacion].ubicacion;

  return (
    <section className="section-formacion_details-main">
      <div className="container section-formacion-details-wrap">
        <div className="section-formacion_details-img-wrap">
          <div>
            <img src={sticker} />
          </div>
        </div>

        <div className="section-formacion_details-description-wrap">{descripcion}</div>

        <div className="section-formacion_details-infos-component-wrap">
          <div className="section-formacion_details-infos-component">
            <div className="section-formacion_details-infos-component-title">
              <img src={require('../../images/icons/mini-calendar/calendar.png')} />
              <h4>Plazas</h4>
            </div>
            <div className="section-formacion_details-infos-component-content">
              <span>{plazas}</span>
            </div>
          </div>

          <div className="section-formacion_details-infos-component">
            <div className="section-formacion_details-infos-component-title">
              <img src={require('../../images/icons/mini-calendar/calendar.png')} />
              <h4>Horarios</h4>
            </div>
            <div className="section-formacion_details-infos-component-content">
              <span>{horarios}</span>
            </div>
          </div>

          <div className="section-formacion_details-infos-component">
            <div className="section-formacion_details-infos-component-title">
              <img src={require('../../images/icons/mini-calendar/calendar.png')} />
              <h4>Maestro</h4>
            </div>
            <div className="section-formacion_details-infos-component-content">
              <span>{maestro}</span>
            </div>
          </div>

          <div className="section-formacion_details-infos-component">
            <div className="section-formacion_details-infos-component-title">
              <img src={require('../../images/icons/mini-calendar/calendar.png')} />
              <h4>Ubicación</h4>
            </div>
            <div className="section-formacion_details-infos-component-content">
              <span>{ubicacion}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

SectionFormacionDetails.propTypes = {
  formacion: P.string,
};

export default SectionFormacionDetails;
