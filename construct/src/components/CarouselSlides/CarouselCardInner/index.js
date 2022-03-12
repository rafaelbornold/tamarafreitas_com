import React from 'react';
import BigTitle from '../../BigTitle';

import './style.scss'

const CarouselCardInner = (props) => {
    
    var item = props.data;
    var style = props.style;

    return (  
        <div className={"carousel-card-inner-content-wrap " + style}>
            <div className="carousel-card-inner-content" style={{ backgroundImage: `url(${item.background})`}}>
                <div className="carousel-title"><BigTitle text={item.title} fontSize="20px" fontColor="white"/></div>
                <div>
                    <div className="carousel-textSummary">{item.textSummary}</div>
                    <div className="carousel-textContent">{item.textContent}</div>
                </div>
            </div>
        </div>
    );


}
 
export default CarouselCardInner ;