import React, { useState } from 'react';
import HeaderLogo from '../../components/HeaderLogo';
import HeaderNav from '../../components/HeaderNav';
import HeaderContact from '../../components/HeaderContact';


import './style.scss';
import './mediascreen.scss';
import './menuZindex.scss';

const MenuHeader = (props) => {

    var classNameIndex = props.classNameIndex;
    var imgColor = props.imgColor;

    return ( 

    <header className={classNameIndex}>
            <div className={"stretcher"}>
                <div className="container header_display">
                    <div className="menu_nav_position_logo"><HeaderLogo imgColor={imgColor} /></div>
                    <div className="menu_nav_position_nav"><HeaderNav /></div>
                    <div className="menu_nav_position_contact"><HeaderContact imgColor={imgColor} /></div>
                </div>
            </div>

    </header>

     );
}
 
export default MenuHeader ;