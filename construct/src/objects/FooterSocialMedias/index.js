import P from 'prop-types';
import React from 'react';

import IconLink from '../../components/IconLink';

import './style.css';

const FooterSocialMedias = (props) => {
  return (
    <footer className="footer-links display-flex-center-center">
      <div className="container footer-link-display">
        <div className="footer-link-text">
          <p>{props.text}</p>
        </div>
        <IconLink
          link="https://www.facebook.com/TamaraFreitasMakeup/"
          target="_blank"
          src="facebook-color"
        />
        <IconLink
          link="https://www.instagram.com/tamarafreitas.micro/"
          target="_blank"
          src="instagram-color"
        />
      </div>
    </footer>
  );
};

FooterSocialMedias.propTypes = {
  text: P.string,
};

export default FooterSocialMedias;
