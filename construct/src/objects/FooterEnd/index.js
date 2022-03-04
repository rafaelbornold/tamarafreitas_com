import React, { useState } from 'react';

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
}
 
export default FooterEnd ;