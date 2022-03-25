import React from 'react';

import mosaicPic1 from '../../images/pictures/photos/foto01.png';
import mosaicPic2 from '../../images/pictures/photos/foto02.png';
import mosaicPic3 from '../../images/pictures/photos/foto03.png';
import mosaicPic4 from '../../images/pictures/photos/foto04.png';
import mosaicPic5 from '../../images/pictures/photos/foto05.png';
import mosaicPic6 from '../../images/pictures/photos/foto06.png';
import mosaicPic7 from '../../images/pictures/photos/foto07.png';

import './style.scss';

const SectionSobreDetails = () => {
  return (
    <section className="section_sobre_details-main">
      <div className="container section_sobre_details-wrap">
        <div className="section_sobre_details-text-up">
          <p>
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia.{' '}
          </p>
        </div>

        <div className="section_sobre_details-mosaic-wrap">
          <article className="section_sobre_details-mosaic">
            <div style={{ backgroundImage: 'url(' + mosaicPic1 + ')' }} className="mosaic-pic1"></div>
            <div style={{ backgroundImage: 'url(' + mosaicPic2 + ')' }} className="mosaic-pic2"></div>
            <div style={{ backgroundImage: 'url(' + mosaicPic3 + ')' }} className="mosaic-pic3"></div>
            <div style={{ backgroundImage: 'url(' + mosaicPic4 + ')' }} className="mosaic-pic4"></div>
            <div style={{ backgroundImage: 'url(' + mosaicPic5 + ')' }} className="mosaic-pic5"></div>
            <div style={{ backgroundImage: 'url(' + mosaicPic6 + ')' }} className="mosaic-pic6"></div>
            <div style={{ backgroundImage: 'url(' + mosaicPic7 + ')' }} className="mosaic-pic7"></div>
          </article>
        </div>

        <div className="section_sobre_details-text-down">
          <p>
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur.{' '}
          </p>

          <p>
            {' '}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur.{' '}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionSobreDetails;
