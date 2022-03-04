import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './style.scss';
import './hamburger.scss';
import './mediascreen.scss';

///////////////////////////////////////////////////
///////////////   Menu Hamburger   ////////////////
///////////////////////////////////////////////////

function HamburgerClick(e){

    var el;
    
    if (e.target.tagName == "SPAN") {
        el = e.target.parentElement;
    }else{
        el = e.target;
    }

    el.classList.toggle('hamburger-active');
    el.classList.toggle('hamburger-not-active');
    el.parentElement.parentElement.firstChild.classList.toggle('menu-active');
}


///////////////////////////////////////////////////
///////////////////////////////////////////////////
///////////////////////////////////////////////////

const HeaderTitle = () => {

    return (  
        <>
        <nav className="menu">
            <ul>
                <li>
                    <NavLink to="/home" 
                        className={({isActive}) => isActive ? " nav-link-active" : ""}>
                        <span>Home</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/sobre"
                        className={({isActive}) => isActive ? " nav-link-active" : ""}>
                        <span>Sobre</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/formaciones"
                        className={({isActive}) => isActive ? " nav-link-active" : ""}>
                        <span>Cursos y Formaciones</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/procedimientos"
                        className={({isActive}) => isActive ? " nav-link-active" : ""}>
                        <span>Procedimientos</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/citasReservas"
                        className={({isActive}) => isActive ? " nav-link-active" : ""}>
                        <span>Citas Y Reservas</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/faq"
                        className={({isActive}) => isActive ? " nav-link-active" : ""}>
                        <span>FAQ</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
        <div className="hamburger-box" onClick={HamburgerClick}>
            <div className="hamburger-btn hamburger-not-active">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        </>
        );
}
 
export default HeaderTitle;
