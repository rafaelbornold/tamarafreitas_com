import P from 'prop-types';
import React from 'react';

import './style.css';

import InsigniaIMG_white from '../../images/logos/insignia-png-white.png';
import InsigniaIMG_color from '../../images/logos/insignia-png-color.png';

const HeaderLogo = (props) => {
  var InsigniaIMG;

  switch (props.imgColor) {
    case 'white':
      InsigniaIMG = InsigniaIMG_white;
      break;

    case 'color':
      InsigniaIMG = InsigniaIMG_color;
      break;
  }

  return (
    <div className="logo_header">
      <div className="logo_img">
        <img src={InsigniaIMG}></img>
      </div>
    </div>
  );
};

HeaderLogo.propTypes = {
  imgColor: P.string,
};

export default HeaderLogo;
