import P from 'prop-types';
import React from 'react';

import './style.scss';

import Button from '../../Button';
import IconLink from '../../IconLink';

const ComponentCursoBlock = (props) => {
  const curso = props.curso;
  const linkVerMas = props.linkVerMas;
  const fechas = props.fechas; // array
  const hora = props.hora;
  const maestro = props.maestro;
  const ubicacion = props.ubicacion;

  const monthName = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nob', 'dic'];

  const fechaStart = `${String(fechas[0].fecha.getDate()).padStart(2, '0')}/${monthName[fechas[0].fecha.getMonth()]}`;
  const fechaEnd =
    fechas[0].fecha != fechas[fechas.length - 1].fecha
      ? ` - ${String(fechas[fechas.length - 1].fecha.getDate()).padStart(2, '0')}/${
          monthName[fechas[0].fecha.getMonth()]
        }`
      : '';

  return (
    <article className="cursos_list-block-content">
      <div className="cursos_list-block-th-wrap">
        <div className="cursos_list-block-th th-curso">
          <IconLink
            link=""
            target=""
            src="mini-star"
          />
          <span>{curso}</span>
        </div>

        <div className="cursos_list-block-th th-maestro">
          <IconLink
            link=""
            target=""
            src="mini-person"
          />
          <span>{maestro}</span>
        </div>

        <div className="cursos_list-block-th th-location">
          <IconLink
            link=""
            target=""
            src="mini-location"
          />
          <span>{ubicacion}</span>
        </div>

        <div className="cursos_list-block-th th-date">
          <IconLink
            link=""
            target=""
            src="mini-calendar"
          />
          <span>{fechaStart + fechaEnd}</span>
        </div>

        <div className="cursos_list-block-th th-time">
          <IconLink
            link=""
            target=""
            src="mini-time"
          />
          <span>{hora}</span>
        </div>

        <div className="cursos_list-block-wrapper-button">
          <Button
            name="btn-01"
            width="85%"
            type="route"
            text="VER MÁS"
            link={linkVerMas}
          />
        </div>
      </div>
    </article>
  );
};

ComponentCursoBlock.propTypes = {
  curso: P.string,
  linkVerMas: P.string,
  fechas: P.array,
  hora: P.string,
  maestro: P.string,
  ubicacion: P.string,
};

export default ComponentCursoBlock;
