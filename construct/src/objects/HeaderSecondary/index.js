import P from 'prop-types';
import React from 'react';

import './style.scss';

const WrapperHeader = (props) => {
  return (
    <header className="header-secondary">
      <p>{props.text}</p>
      <div className="header-secondary-background"></div>
    </header>
  );
};

WrapperHeader.propTypes = {
  text: P.string,
};

export default WrapperHeader;
