import React, { useState } from 'react';

import './style.scss';

const ImageModule = (props) => {

    var src = props.src;

    return (  

    <div style={{backgroundImage: 'url(' + src + ')'}} className="component_image_module-pic-img" >
        <div className="component_image_module-pic-img-border"></div>
    </div>


    );
}
 
export default ImageModule;
