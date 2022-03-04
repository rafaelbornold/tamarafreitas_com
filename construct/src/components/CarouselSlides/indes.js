import React, { useState } from 'react';

import './style.scss';

import { content}  from './data'

import { CarouselCard } from './CarouselCard';

export const CarouselSlides = (props) => {

    var cardsData = props.cardsData;
    var data = content[cardsData];

    return (  

        <div className="component-carousel-container">
            <div className="component-carousel-slide" >

            {data.map((module, n) => {
                    
                    return (

                        <CarouselCard
                            key={n}
                            title={data[n].title}
                            description = {data[n].description}
                            image = {data[n].image}
                            mediaType = {data[n].mediaType}
                            mediaSrc = {data[n].mediaSrc}
                        />
    
                    );

                })}



            </div>
        </div>

    );

}