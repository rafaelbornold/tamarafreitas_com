import React from 'react';

import BigTitle from '../../components/BigTitle';

import './style.scss';
import './mediascreen.scss';

const Sectionmision = () => {
  const title = 'NUESTRA MISIÓN';
  const image = require('../../images/landscape/IMG-20200812-WA0021.JPG');

  return (
    <section className="section-mision-main">
      <div className="section-mision-bigtitle-01-wrap">
        <BigTitle text={title} />
      </div>

      <div className="container section-mision-wrapper">
        <div className="section-mision-content">
          <div className="section-mision-bigtitle-02-wrap">
            <BigTitle text={title} />
          </div>
          <article className="article-mision-wrap">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cill.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            </p>
          </article>
        </div>

        <div className="section-mision-img">
          <div className="image-section-mision-wrapper">
            <div className="image-section-mision-picture" style={{ backgroundImage: 'url(' + image + ')' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sectionmision;
