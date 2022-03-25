import P from 'prop-types';
import React from 'react';

import './style.scss';

import Button from '../../Button';

const ComponentCursoTr = (props) => {
  const curso = props.curso;
  const linkVerMas = props.linkVerMas;
  const fechas = props.fechas; // array
  const hora = props.hora;
  const maestro = props.maestro;
  const ubicacion = props.ubicacion;

  const monthName = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nob', 'dic'];

  return (
    <article className="cursos_list-table-tr">
      <div className="cursos_list-table-td fecha">
        <p>
          {fechas.map((module, n) => {
            return (
              <span key={n}>
                {`${String(fechas[n].fecha.getDate()).padStart(2, '0')}/${monthName[fechas[n].fecha.getMonth()]}`}
              </span>
            );
          })}
        </p>
      </div>
      <div className="cursos_list-table-td hora">
        <p>
          <span>{hora}</span>
        </p>
      </div>
      <div className="cursos_list-table-td maestro">
        <p>
          <span>{maestro}</span>
        </p>
      </div>
      <div className="cursos_list-table-td curso">
        <p>
          <span>{curso}</span>
        </p>
      </div>
      <div className="cursos_list-table-td ubicacion">
        <p>
          <span>{ubicacion}</span>
        </p>
      </div>
      <div className="cursos_list-table-td vermais">
        <p>
          {' '}
          <Button
            name="btn-01"
            width="130px"
            type="route"
            text="VER MAIS"
            link={linkVerMas}
            target="_self"
          />
        </p>
      </div>
    </article>
  );
};

ComponentCursoTr.propTypes = {
  curso: P.string,
  linkVerMas: P.string,
  fechas: P.array,
  hora: P.string,
  maestro: P.string,
  ubicacion: P.string,
};

export default ComponentCursoTr;
