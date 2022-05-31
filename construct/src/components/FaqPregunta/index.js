import P from 'prop-types';
import React, { useRef, useState } from 'react';

import emailjs from '@emailjs/browser';

import './style.scss';
import Spinner from '../Spinner';

const FaqPregunta = () => {
  const [classIinputFocus, setClassInputFocus] = useState();
  const [status, setStatus] = useState(null);

  const form = useRef();
  const inputTime = useRef();
  const divStatusWrap = useRef();
  const divStatus = useRef();

  var now = new Date();

  const handleSubmit = (e) => {
    e.preventDefault();
    inputTime.current.value = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}h (${now.getDate()}-${now.getMonth()}-${now.getFullYear()})`;

    form.current.style.display = 'none';
    divStatusWrap.current.style.display = 'flex';
    divStatus.current.style.opacity = 1;
    setStatus('waiting');

    sendEmail();
  };

  const sendEmail = () => {
    emailjs.sendForm('service_2wr7rug', 'template_s7cgj5g', form.current, 'bwzPvfRtCtzGaihD5').then(
      (result) => {
        console.log(result.text);
        setStatus(200);
      },
      (error) => {
        console.log(error.text);
        setStatus(500);
      },
    );
  };

  return (
    <>
      <div
        className="component-FaqPregunta-status-wrapper"
        ref={divStatusWrap}
      >
        <div
          className="component-FaqPregunta-status"
          ref={divStatus}
        >
          {status === null ? (
            ''
          ) : status === 'waiting' ? (
            <Spinner />
          ) : status === 200 ? (
            <p>GRACIAS ! :)</p>
          ) : (
            <p>HEMOS TENIDO UN PROBLEMA Y NO FUE POSIBLE ENVIAR TU PREGUNTA! :( POR FAVOR INTELTELO DE NUEVO</p>
          )}
        </div>
      </div>

      <form
        className="component-FaqPregunta-form"
        ref={form}
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          type="hidden"
          id="to_name"
          name="to_name"
          value="TAMARA FREITAS"
        />

        <input
          type="hidden"
          ref={inputTime}
          id="time"
          name="time"
        />

        <input
          type="email"
          id="reply_to"
          name="reply_to"
          required
          placeholder="Tu correo"
        />

        <textarea
          className={'textarea ' + classIinputFocus}
          rows="2"
          type="text"
          id="message"
          name="message"
          required
          placeholder="Ingrese su pregunta aqui."
          onFocus={() => {
            setClassInputFocus('focus');
          }}
          onBlur={() => {
            setClassInputFocus('');
          }}
        />
        <input
          type="text"
          id="from_name"
          name="from_name"
          required
          placeholder="Tu nombre"
        />

        <input
          type="submit"
          value="Enviar"
        />
      </form>
    </>
  );
};

FaqPregunta.propTypes = {
  message: P.string,
};

export default FaqPregunta;
