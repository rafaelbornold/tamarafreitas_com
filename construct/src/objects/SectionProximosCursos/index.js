import React from 'react';

import BigTitle from '../../components/BigTitle';
import CursosList from '../../components/CursosList';

import './style.scss';

const SectionProximosCursos = () => {
  return (
    <section className="proximos_cursos-main">
      <div className="container proximos_cursos-wrapper">
        <div className="proximos_cursos-title">
          <BigTitle text="PRÓXIMOS CURSOS" />
        </div>

        <div className="proximos_cursos-content">
          <p>
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.{' '}
          </p>
        </div>

        <div className="proximos_cursos-list-wrapper">
          <CursosList view="table" />
          <CursosList view="block" />
        </div>
      </div>
    </section>
  );
};

export default SectionProximosCursos;
