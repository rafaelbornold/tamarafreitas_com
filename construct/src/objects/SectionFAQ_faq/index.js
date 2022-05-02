import React from 'react';

import { content } from '../../databases/faq/data';

import BigTitle from '../../components/BigTitle';
import ListShowHide from '../../components/ListShowHide';
import Button from '../../components/Button';

import './style.scss';

const SectionFAQ_faq = () => {
  var data = content[0];

  return (
    <section className="section-FAQ_faq-main">
      <div className="container section-FAQ_faq-wrap">
        <div className="section-FAQ_faq-title">
          <BigTitle text="PREGUNTAS FRECUENTES" />
        </div>

        <div className="section-FAQ_faq-list-wrap">
          <div className="section-FAQ_faq-list-content">
            {data.map((module, n) => {
              return (
                <ListShowHide
                  key={n + 1}
                  number={n + 1}
                  title={data[n].title}
                  description={data[n].description}
                />
              );
            })}
          </div>
        </div>

        <div className="section-FAQ_faq-form-wrap">
          <BigTitle
            text="¿No encontró lo que necesita? haga su pregunta aquí."
            fontSize="24px"
          />

          <form
            method="POST"
            // action={void 0}
            className="section-FAQ_faq-form"
          >
            <input
              type="text"
              id="pregunta"
              name="pregunta"
              required
              placeholder="Ingrese su pregunta aqui."
            />
            <Button
              name="btn-03"
              width="130px"
              type="route"
              text="ENVIAR"
              link=""
              target="_self"
            />
          </form>

          <BigTitle
            text="O llámanos por Whatsapp aquí."
            fontSize="24px"
          />
          <div className="btn-whatsapp">
            <Button
              name="btn-04"
              width="130px"
              type="redirect"
              text="PREGUNTAR"
              link="https://api.whatsapp.com/send?phone=34662296124&text=Hola!%20Que%20tal?"
              target="_blank"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFAQ_faq;
