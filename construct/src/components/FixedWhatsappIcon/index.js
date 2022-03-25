import React from 'react';

import './style.scss';

const FixedWhatsappIcon = () => {
  var link = 'https://api.whatsapp.com/send?phone=34662296124&text=Hola!%20Que%20tal?';
  var target = '_blank';
  var src = require('../../images/icons/social-medias/whatsapp_fijo_mono.png');

  return (
    <div className="fixed_whatsapp_icon">
      <a href={link} target={target}>
        <img src={src}></img>
      </a>
    </div>
  );
};

export default FixedWhatsappIcon;
