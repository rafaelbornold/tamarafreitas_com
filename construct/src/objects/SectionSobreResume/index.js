import React from 'react';

import ImageTamaraHome from '../../components/ImageTamaraHome';
import ArticleAbout from '../../contents/ArticleAbout';

import './style.css';

const SobreHome = () => {
  return (
    <section className="sobre-home-main">
      <div className="container sobre-home-wrapper">
        <div className="sobre-home-left">
          <ImageTamaraHome />
        </div>
        <div className="sobre-home-right">
          <ArticleAbout />
        </div>
      </div>
    </section>
  );
};

export default SobreHome;
