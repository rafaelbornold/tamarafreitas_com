import React, { useState } from 'react';

import './style.scss';
import './mediascreen.scss';


const ListShowHide = (props) => {


    var number = props.number;
    var title = props.title;
    var description = props.description;

    function arrowExtendsClick(e){
        e.target.classList.toggle("rotate");
        e.target.parentElement.parentElement.parentElement.parentElement.children[1].classList.toggle("hide");
    }


    return (  

        <article className="component-formacion_benefits-list">
       
            <div className="component-formacion_benefits-content">
                <div className="component-formacion_benefits-content-title">
                    <div className="component-formacion_benefits-content-title-number">
                        <span> {number} </span>
                    </div>
                    <div className='component-formacion_benefits-content-title-summary'> 
                        <h6> {title} </h6> 
                        <figure>
                            <img src={require("../../images/icons/arrow_extends/1x/arrow.png")} onClick={arrowExtendsClick} />
                        </figure>
                    </div>
                </div>
                <div className="component-formacion_benefits-content-description">
                    <p>
                    {description}
                    </p>
                </div>
            </div>

         </article>


    );
}
 
export default ListShowHide;
