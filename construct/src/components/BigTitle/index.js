import React, { useState } from 'react';

import './style.scss';

const BigTitle = (props) => {

    var text = props.text;
    var fontSize = !props.fontSize ? "36px" : props.fontSize;
    var fontColor = !props.fontColor ? "var(--rosa-escuro)" : props.fontColor;

    return (  
        <div className="bigtitle" style={{fontSize: fontSize , color: fontColor}}>
            <h1>{text}</h1>
        </div>
        );
}
 
export default BigTitle;
