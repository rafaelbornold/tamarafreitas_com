import React, { useState } from 'react';

import './style.scss';

const WrapperHeader = (props) => {
    
    return ( 

        <header className="header-secondary">
            <p>{props.text}</p>
            <div className="header-secondary-background"></div>
        </header>

     );
}
 
export default WrapperHeader ;