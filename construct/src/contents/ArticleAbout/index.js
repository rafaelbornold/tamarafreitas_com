import React from 'react';

import Button from '../../components/Button';
import BigTitle from '../../components/BigTitle';

import imgLogo from '../../images/logos/LogoTamara-escuro.png';

import './style.css';

const ResumedAbout = () => {
  return (
    <article className="resumed-about">
      <h2>ACERCA DE</h2>
      <BigTitle text="TAMARA FREITAS MICRO" />
      <p>{`Lorem ipsum dolor sit amet, ${(
        <span style={{ fontWeight: 'bold' }}>with</span>
      )} adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`}</p>
      <div className="image-separator">
        <img src={imgLogo}></img>
      </div>
      <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
        sint occaecat cupidatat non proident, sunt in culpa qui officia.
      </p>
      <div className="resumed-about-button">
        <Button name="btn-04" width="130px" type="route" text="VER MÁS" link="/sobre" />
      </div>
    </article>
  );
};

export default ResumedAbout;
