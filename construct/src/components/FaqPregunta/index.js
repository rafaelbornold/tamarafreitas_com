import P from 'prop-types';
import React, { useRef, useState } from 'react';

import emailjs from '@emailjs/browser';

import './style.scss';

const FaqPregunta = () => {
  const [classIinputFocus, setClassInputFocus] = useState();

  const form = useRef();
  const inputTime = useRef();

  var now = new Date();

  const handleClick = (e) => {
    e.preventDefault();
    inputTime.current.value = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}h (${now.getDate()}-${now.getMonth()}-${now.getFullYear()})`;

    sendEmail();
  };

  const sendEmail = () => {
    emailjs.sendForm('service_2wr7rug', 'template_s7cgj5g', form.current, 'bwzPvfRtCtzGaihD5').then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      },
    );
  };

  return (
    <form
      className="component-FaqPregunta-form"
      ref={form}
      onSubmit={(e) => {
        handleClick(e);
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
  );
};

FaqPregunta.propTypes = {
  message: P.string,
};

export default FaqPregunta;
