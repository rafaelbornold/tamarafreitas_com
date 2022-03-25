import React from 'react';

import Button from '../../components/Button';
import BigTitle from '../../components/BigTitle';

import './style.scss';

const SectionBoletinInformativo = () => {
  return (
    <section className="boletin-main">
      <div className="container boletin-wrapper">
        <div className="boletin-title">
          <BigTitle text="BOLETIN INFORMATIVO" />
        </div>

        <div className="boletin-content">
          <p> Duis aute irure dolor in reprehenderit in voluptate velit. </p>
        </div>

        <div className="boletin-form-wrapper">
          <form className="boletin-form">
            <input type="email" id="email" name="email" required placeholder="Tu correo eletrónico" />
            <Button name="btn-03" width="160px" type="route" text="REGISTRARSE" link="" />
          </form>
        </div>
      </div>
    </section>
  );
};

export default SectionBoletinInformativo;
