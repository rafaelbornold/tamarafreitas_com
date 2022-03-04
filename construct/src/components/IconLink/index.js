import React, { useState } from 'react';
import { Link } from 'react-router-dom';


import './style.css';

import FacebookLogoColor from "../../images/icons/social-medias/facebook_color.svg";
import InstagramLogoColor from "../../images/icons/social-medias/instagram_color.png";
import WhatsappLogoColor from "../../images/icons/social-medias/whatsapp_color.svg";

import FacebookLogoMono from "../../images/icons/social-medias/facebook_mono.svg";
import InstagramLogoMono from "../../images/icons/social-medias/instagram_mono.svg";
import EmailLogoMono from "../../images/icons/social-medias/email_mono.svg";
import WhatsappLogoMono from "../../images/icons/social-medias/whatsapp_mono.svg";


import VisaLogoColor from "../../images/icons/payment-cards/CardIcon_Visa.png";
import MastercardLogoColor from "../../images/icons/payment-cards/CardIcon_MasterCard.png";
import AmericanexpressLogoColor from "../../images/icons/payment-cards/CardIcon_AmericanExpress.png";
import DinnersclubLogoColor from "../../images/icons/payment-cards/CardIcon_DinersClub.png";
import DiscoverLogoColor from "../../images/icons/payment-cards/CardIcon_discover.png";


import MiniCalendar from "../../images/icons/mini-calendar/calendar.png";
import MiniPerson from "../../images/icons/mini-person/person.png";
import MiniTime from "../../images/icons/mini-time/time.png";
import MiniStar from "../../images/icons/mini-star/star.png";
import MiniLocation from "../../images/icons/mini-location/location.png";


const IconLink = (props) => {

    var src = "";

    switch (props.src) {
        case "facebook-color":
            src = FacebookLogoColor;
            break;

        case "instagram-color":
            src = InstagramLogoColor;
            break;

        case "whatsapp-color":
            src = WhatsappLogoColor;
            break;


        case "facebook-mono":
            src = FacebookLogoMono;
            break;

        case "instagram-mono":
            src = InstagramLogoMono;
            break;

        case "email-mono":
            src = EmailLogoMono;
            break;

        case "whatsapp-mono":
            src = WhatsappLogoMono;
            break;
 
            
        case "visa-color":
            src = VisaLogoColor;
            break;
    
        case "mastercard-color":
            src = MastercardLogoColor;
            break;

        case "americanexpress-color":
            src = AmericanexpressLogoColor;
            break;

        case "dinnersclub-color":
            src = DinnersclubLogoColor;
            break;

        case "discover-color":
            src = DiscoverLogoColor;
            break;

        case "mini-calendar":
            src = MiniCalendar;
            break;

        case "mini-time":
            src = MiniTime;
            break;

        case "mini-person":
            src = MiniPerson;
            break;

        case "mini-star":
            src = MiniStar;
            break;

        case "mini-location":
            src = MiniLocation;
            break;

    }


    switch (props.link) {

        case "" :
          
            return (  
                <div className="icon-link">
                    <img src={src}></img>
                </div>
        );
        default :

            return (  
                <div className="icon-link">
                    <a href={props.link} target={props.target}><img src={src}></img></a>
                </div>
        );
    
    }

}
 
export default IconLink;