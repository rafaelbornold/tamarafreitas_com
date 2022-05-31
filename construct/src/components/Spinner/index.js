import React from 'react';
import P from 'prop-types';

import './style.scss';

function Spinner() {
  return <div className="spinner"></div>;
}

Spinner.propTypes = {
  title: P.string,
};

export default Spinner;
