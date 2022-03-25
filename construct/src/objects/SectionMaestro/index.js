import React from 'react';

import BigTitle from '../../components/BigTitle';

import './style.scss';
import './mediascreen.scss';

const SectionMaestro = () => {
  const BIGATITLE_TEXT = 'CONOCER AL MAESTRO';

  return (
    <section className="section_maestro-main">
      <div className="section_maestro-bigtitle-01-wrap">
        <BigTitle text={BIGATITLE_TEXT} />
      </div>
      <div className="container section_maestro-wrapper">
        <div className="section_maestro-img">
          <div className="image-section_maestro-wrapper">
            <div className="image-section_maestro-picture"></div>
          </div>
        </div>
        <div className="section_maestro-content">
          <div className="section_maestro-bigtitle-02-wrap">
            <BigTitle text={BIGATITLE_TEXT} />
          </div>
          <article className="article_maestro-wrap">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.
            </p>
            <h6>FORMACIÓN</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default SectionMaestro;
