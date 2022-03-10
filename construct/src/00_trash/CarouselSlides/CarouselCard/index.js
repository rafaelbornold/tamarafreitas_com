import React, { useState } from 'react';

import './style.scss';

export const CarouselCard = (props) => {

    var title = props.title;
    var description = props.description;
    var image = props.image;
    var mediaType = props.mediaType;
    var mediaSrc = props.mediaSrc;

    return (  

        <div className="component-carousel-card">
            <div className="component-carousel-detail">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
            <img src={image} />
        </div> 
     
    );

}