import React, { useState } from 'react';

import './style.scss';

import BigTitle from '../../../components/BigTitle';


const FormacionModuleContentFirst = (props) => {

    var BigTitleText = props.title;
    var BugTitleSize = props.titleSize;
    var stickerImage = props.sticker;

    return (  

        <div className="component_formacion-module-content-header">
            <div className="component_formacion-module-content-header-title">
                <h2>FORMACIÓN</h2>
                <BigTitle text={BigTitleText} fontSize={BugTitleSize}/>
            </div>
            <div className="component_formacion-module-content-header-img">
                <img src={stickerImage}></img>
            </div>
        </div>

    );
}
 
export default FormacionModuleContentFirst;
