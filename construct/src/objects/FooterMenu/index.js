import React, { useState } from 'react';

import IconLink from '../../components/IconLink';


import './style.css';

const FooterMenu = (props) => {
    return ( 

    <footer className="footer-menu display-flex-center-center">
        
        <div className="container footer-menu-display">

            <div className="footer-menu-content-left">
                <div className="footer-menu-content-left-title">TAMARA FREITAS</div>
                <IconLink link="https://www.instagram.com/tamarafreitas.micro/" target="_blank" src="instagram-mono"/>
                <IconLink link="mailto:contacto@tamarafreitas.com" target="_blank" src="email-mono"/>
                <IconLink link="https://api.whatsapp.com/send?phone=34662296124&text=Hola!%20Que%20tal?" target="_blank" src="whatsapp-mono"/>
                <IconLink link="https://www.facebook.com/TamaraFreitasMakeup/" target="_blank" src="facebook-mono"/>
            </div>  

            <div className="footer-menu-content-right">
                    <div className="footer-menu-content-right-title">+34 662 29 61 24</div>
                    <IconLink link="" target="" src="visa-color"/>
                    <IconLink link="" target="" src="mastercard-color"/>
                    <IconLink link="" target="" src="americanexpress-color"/>
                    <IconLink link="" target="" src="dinnersclub-color"/>
                    <IconLink link="" target="" src="discover-color"/>
            </div>    
        
        </div>

    </footer>

     );
}
 
export default FooterMenu ;