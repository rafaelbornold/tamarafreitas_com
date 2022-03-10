import React, { useState } from 'react';

import './style.scss';

import { content}  from './data'

import { CarouselCard } from './CarouselCard';

export const CarouselSlides = (props) => {

    var data = props.data;

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