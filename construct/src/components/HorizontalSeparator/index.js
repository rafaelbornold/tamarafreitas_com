import React, { useState } from 'react';

import './style.css';

const HorizontalSeparator = () => {

    return (  
        <>
        <div className="hs-wrapper">
            <div className="line-left"></div>
            <div className="ball-center"></div>
            <div className="line-right"></div>
        </div>
        <div className="arrow-center-wrap">
        <div className="arrow-center"></div>
        </div>
        </>

    );
}
 
export default HorizontalSeparator;
