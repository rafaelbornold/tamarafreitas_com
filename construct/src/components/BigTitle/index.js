import React, { useState } from 'react';

import './style.scss';

const BigTitle = (props) => {

    var text = props.text;
    var fontSize = !props.fontSize ? "36px" : props.fontSize;

    return (  
        <div className="bigtitle" style={{fontSize: fontSize}}>
            <h1>{text}</h1>
        </div>
        );
}
 
export default BigTitle;
