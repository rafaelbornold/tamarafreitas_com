import P from 'prop-types';
import React from 'react';

import { content } from '../../databases/formaciones/data';

import IconLink from '../IconLink';
import ComponentCursoBlock from './ComponentCursoBlock';
import ComponentCursoTr from './ComponentCursoTr';

import './style.scss';

const CursosList = (props) => {
  const data = content['ProximosCursos'];

  if (props.view == 'table') {
    return (
      <div className="cursos_list-table">
        <div className="cursos_list-table-content">
          <div className="cursos_list-table-tr">
            <div className="cursos_list-table-th fecha">
              <div className="cursos_list-table-th-title-wrap">
                <IconLink
                  link=""
                  target=""
                  src="mini-calendar"
                />
                <span>Fecha</span>
              </div>
            </div>

            <div className="cursos_list-table-th hora">
              <div className="cursos_list-table-th-title-wrap">
                <IconLink
                  link=""
                  target=""
                  src="mini-time"
                />
                <span>Hora</span>
              </div>
            </div>
            <div className="cursos_list-table-th maestro">
              <div className="cursos_list-table-th-title-wrap">
                <IconLink
                  link=""
                  target=""
                  src="mini-person"
                />
                <span>Maestro</span>
              </div>
            </div>
            <div className="cursos_list-table-th curso">
              <div className="cursos_list-table-th-title-wrap">
                <IconLink
                  link=""
                  target=""
                  src="mini-star"
                />
                <span>Curso</span>
              </div>
            </div>
            <div className="cursos_list-table-th ubicacion">
              <div className="cursos_list-table-th-title-wrap">
                <IconLink
                  link=""
                  target=""
                  src="mini-location"
                />
                <span>Ubicación</span>
              </div>
            </div>
            <div className="cursos_list-table-th vermais">
              <span></span>
            </div>
          </div>

          {data.map((module, n) => {
            if (data[n].fechas[0].fecha >= new Date()) {
              // if (true) {
              return (
                <ComponentCursoTr
                  key={n}
                  curso={data[n].curso}
                  linkVerMas={data[n].linkVerMas}
                  fechas={data[n].fechas}
                  hora={data[n].hora}
                  maestro={data[n].maestro}
                  ubicacion={data[n].ubicacion}
                />
              );
            }
          })}
        </div>
        {/* <div className="cursos_list-table-wrapper-button">
                  <Button name="btn-03" width="160px" type="route" text="VER TODO" link="/something"/>
                </div> */}
      </div>
    );
  }

  if (props.view == 'block') {
    return (
      <div className="cursos_list-block">
        {data.map((module, n) => {
          if (data[n].fechas[0].fecha >= new Date()) {
            // if (true) {
            return (
              <ComponentCursoBlock
                key={n}
                curso={data[n].curso}
                linkVerMas={data[n].linkVerMas}
                fechas={data[n].fechas}
                hora={data[n].hora}
                maestro={data[n].maestro}
                ubicacion={data[n].ubicacion}
              />
            );
          }
        })}
      </div>
    );
  }
};

CursosList.propTypes = {
  view: P.string,
};

export default CursosList;
