import P from 'prop-types';
import React, { useRef, useEffect } from 'react';

import HeaderLogo from '../../components/HeaderLogo';
import HeaderNav from '../../components/HeaderNav';
import HeaderContact from '../../components/HeaderContact';

import './style.scss';
import './mediascreen.scss';
import './menuZindex.scss';

const MenuHeader = (props) => {
  const headerElement = useRef();
  const classNameIndex = props.classNameIndex;
  const imgColor = props.imgColor;

  useEffect(() => {
    if (document.querySelector('.menuIndexFront')) {
      //have 2 menus on screen
      setTimeout(() => {
        headerElement.current.style.transition = '0.5s';
        headerElement.current.style.opacity = 1;
      }, 1000);
    } else {
      // have 1 menu on screen
      headerElement.current.style.opacity = 1;
    }
  }, []);

  return (
    <header
      className={classNameIndex}
      ref={headerElement}
    >
      <div className={'stretcher'}>
        <div className="container header_display">
          <div className="menu_nav_position_logo">
            <HeaderLogo imgColor={imgColor} />
          </div>
          <div className="menu_nav_position_nav">
            <HeaderNav />
          </div>
          <div className="menu_nav_position_contact">
            <HeaderContact imgColor={imgColor} />
          </div>
        </div>
      </div>
    </header>
  );
};

MenuHeader.propTypes = {
  classNameIndex: P.string,
  imgColor: P.string,
};

export default MenuHeader;
