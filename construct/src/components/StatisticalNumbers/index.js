import React, { useState } from 'react';

import './style.scss';

const StatisticalNumbers = (props) => {

    var number = props.number;
    var numberAdd = props.numberAdd;
    var unit = props.unit;
    var action = props.action;


    return (  
        <div className="statistical_numbers-wrap">
            <div className="statistical_numbers-number-wrap">
                <span className="statistical_numbers-number">{number}</span> 
                <span className="statistical_numbers-numberAdd">{numberAdd}</span>
                </div>
            <div className="statistical_numbers-separator"></div>
            <div className="statistical_numbers-description">
                <span className="statistical_numbers-unit">{unit}</span>
                <span className="statistical_numbers-action">{action}</span>
            </div>
        </div>
    );
}
 
export default StatisticalNumbers;
