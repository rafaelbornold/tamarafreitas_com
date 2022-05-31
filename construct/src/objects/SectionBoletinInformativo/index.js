import React, { useRef, useState } from 'react';

import BigTitle from '../../components/BigTitle';
import Spinner from '../../components/Spinner';

import './style.scss';

const SectionBoletinInformativo = () => {
  const divStatus = useRef();
  const form = useRef();
  const inputEmail = useRef();
  const [status, setStatus] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();

    form.current.style.display = 'none';
    divStatus.current.style.opacity = 1;
    setStatus('waiting');

    const fetchData = async () => {
      const data = { email: inputEmail.current.value };
      try {
        const response = await fetch('http://localhost/insert.php', {
          method: 'POST',
          body: JSON.stringify(data),
        });
        const jsonResult = await response.json();
        console.log(jsonResult);
        setStatus(jsonResult.status);
      } catch (e) {
        console.log(e);
        setStatus(500);
        throw e;
      }
    };

    fetchData();
  }

  return (
    <section className="boletin-main">
      <div className="container boletin-wrapper">
        <div className="boletin-title">
          <BigTitle text="BOLETIN INFORMATIVO" />
        </div>

        <div className="boletin-content">
          <p style={{ color: 'red' }}> Duis aute irure dolor in reprehenderit in voluptate velit. </p>
        </div>

        <div className="boletin-form-wrapper">
          <div
            className="status"
            ref={divStatus}
          >
            {status === null ? (
              ''
            ) : status === 'waiting' ? (
              <Spinner />
            ) : status === 200 ? (
              <p>GRACIAS POR REGISTRARSE !</p>
            ) : (
              <p>HEMOS TENIDO UN PROBLEMA Y NO FUE POSIBLE REGISTRAR TU E-MAIL.! :( POR FAVOR INTELTELO DE NUEVO</p>
            )}
          </div>
          <form
            className="boletin-form"
            onSubmit={(e) => {
              handleSubmit(e);
            }}
            ref={form}
          >
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Tu correo eletrónico"
              ref={inputEmail}
            />
            <input
              type="submit"
              className="btn-03"
              value="REGISTRARSE"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default SectionBoletinInformativo;
