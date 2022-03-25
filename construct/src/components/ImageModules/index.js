import P from 'prop-types';
import React from 'react';

import './style.scss';

const ImageModule = (props) => {
  var src = props.src;

  return (
    <div
      className="component_image_module-pic-img"
      style={{ backgroundImage: 'url(' + src + ')' }}
    >
      <div className="component_image_module-pic-img-border"></div>
    </div>
  );
};

ImageModule.propTypes = {
  src: P.string,
};

export default ImageModule;
