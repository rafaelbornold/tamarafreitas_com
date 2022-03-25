import P from 'prop-types';
import React from 'react';

import './style.css';

const FooterEnd = (props) => {
  return (
    <footer className="footer-end display-flex-center-center">
      <div className="container footer-end-display">
        <div className="footer-end-text display-flex-center-center">
          <p>{props.text1}</p>
          <p>{props.text2}</p>
        </div>
      </div>
    </footer>
  );
};

FooterEnd.propTypes = {
  text1: P.string,
  text2: P.string,
};

export default FooterEnd;
