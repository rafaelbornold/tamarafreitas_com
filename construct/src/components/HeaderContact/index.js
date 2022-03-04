import React, { useState } from 'react';

import './style.css';

import PersonContact_white from "../../images/icons/person_contact/person_contact_white.png";
import PersonContact_color from "../../images/icons/person_contact/person_contact_color.png";

const HeaderContact = (props) => {

    var PersonContact;

    switch (props.imgColor) {

        case "white":
            PersonContact = PersonContact_white;
            break;

        case "color":
            PersonContact = PersonContact_color;
            break;

    }

    return (  
        <div className="contact_header">
        <div className="whats_img">
            <a href="https://api.whatsapp.com/send?phone=34662296124&text=Hola!%20Que%20tal?" target="_blank">
                <img src={PersonContact}></img>
            </a>
        </div>
    </div>
);
}
 
export default HeaderContact;
