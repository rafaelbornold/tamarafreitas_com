import React from 'react';

import Button from '../../components/Button';
import ImageTamaraHome from '../../components/ImageTamaraHome';

import './style.css';

const MainLinks = () => {
  return (
    <main className="main-links display-flex-center-center">
      <div className="container wrapper-links">
        <div className="image">
          <ImageTamaraHome />
        </div>
        <nav className="links">
          <ul>
            <li>
              <Button
                name="btn-01"
                width="80%"
                type="redirect"
                text="Información citas"
                link="https://api.whatsapp.com/send?phone=34662296124&text=Hola%20me%20gustaría%20información%20sobre"
                target="_blank"
              />
            </li>
            <li>
              <Button
                name="btn-01"
                width="80%"
                type="redirect"
                text="Información cursos"
                link="https://api.whatsapp.com/send?phone=34662296124&text=Hola%20me%20gustaría%20información%20sobre%20el%20curso%20de"
                target="_blank"
              />
            </li>
            <li>
              <Button
                name="btn-01"
                width="80%"
                type="redirect"
                text="Reservar cita con Tamara Freitas"
                link="/reservas"
                target="_self"
              />
            </li>
            <li>
              <Button
                name="btn-01"
                width="80%"
                type="redirect"
                text="Instagram"
                link="https://www.instagram.com/tamarafreitas.micro/"
                target="_blank"
              />
            </li>
            <li>
              <Button
                name="btn-01"
                width="80%"
                type="route"
                text="Website"
                link="/home"
                target="_self"
              />
            </li>
            <li>
              <Button
                name="btn-01"
                width="80%"
                name1="button-B1"
                type="redirect"
                text="Lash Lifting Pro"
                link="https://instagram.com/lashlifting_oficial"
                target="_blank"
              />
            </li>
          </ul>
        </nav>
      </div>
    </main>
  );
};

export default MainLinks;
