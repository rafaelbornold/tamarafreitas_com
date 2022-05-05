import P from 'prop-types';
import React, { useRef, useState } from 'react';
// import Button from '../Button';
import emailjs from '@emailjs/browser';

import './style.scss';

const FaqPregunta = () => {
  const [time, setTime] = useState();
  const form = useRef();

  var now = new Date();

  const handleClick = () => {
    setTime(
      `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}h (${now.getDate()}-${now.getMonth()}-${now.getFullYear()})`,
    );

    setTimeout(() => {
      sendEmail();
    }, 100);
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
    >
      <input
        type="hidden"
        id="to_name"
        name="to_name"
        value="TAMARA FREITAS"
      />

      <input
        type="hidden"
        id="time"
        name="time"
        value={time}
      />

      <input
        type="hidden"
        id="from_name"
        name="from_name"
        value="CARMEN MIR"
      />
      <input
        type="hidden"
        id="reply_to"
        name="reply_to"
        value="carmgngmir@gmail.com"
      />

      <input
        type="text"
        id="message"
        name="message"
        required
        placeholder="Ingrese su pregunta aqui."
      />
      <input
        type="button"
        value="Enviar"
        onClick={() => {
          handleClick();
        }}
      />
      {/* <Button
        name="btn-03"
        width="130px"
        type="route"
        text="ENVIAR"
        link=""
        target="_self"
      /> */}
    </form>
  );
};

FaqPregunta.propTypes = {
  message: P.string,
};

export default FaqPregunta;
