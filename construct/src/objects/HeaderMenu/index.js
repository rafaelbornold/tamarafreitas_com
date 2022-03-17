import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

import HeaderLogo from '../../components/HeaderLogo';
import HeaderNav from '../../components/HeaderNav';
import HeaderContact from '../../components/HeaderContact';


import './style.scss';
import './mediascreen.scss';
import './menuZindex.scss';

const MenuHeader = (props) => {

    var classNameIndex = props.classNameIndex;
    var imgColor = props.imgColor;


    // const browserPage = useLocation();

    // console.log(browserPage.pathname);

    // if ( browserPage.pathname != "/" ){

    //     document.querySelector(`.${classNameIndex}`).style.opacity = "1";
  
    // }

    // function showMenuBehind() {

    //     if (classNameIndex != '') {

    //         var scrollTop =  window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
            
    //         if (scrollTop >= 100) {

    //             document.querySelector(`.${classNameIndex}`).style.opacity = "1";

    //         }

    //     }

    // }

    // window.addEventListener("scroll",showMenuBehind);


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