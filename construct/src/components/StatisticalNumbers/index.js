import P from 'prop-types';
import React from 'react';

import './style.scss';

const StatisticalNumbers = (props) => {
  var number = props.number;
  var numberAdd = props.numberAdd;
  var unit = props.unit;
  var action = props.action;

  return (
    <div className="statistical_numbers-wrap">
      <div className="statistical_numbers-number-wrap">
        <span
          className="statistical_numbers-number"
          style={{ color: 'red' }}
        >
          {number}
        </span>
        <span
          className="statistical_numbers-numberAdd"
          style={{ color: 'red' }}
        >
          {numberAdd}
        </span>
      </div>
      <div className="statistical_numbers-separator"></div>
      <div className="statistical_numbers-description">
        <span
          className="statistical_numbers-unit"
          style={{ color: 'red' }}
        >
          {unit}
        </span>
        <span
          className="statistical_numbers-action"
          style={{ color: 'red' }}
        >
          {action}
        </span>
      </div>
    </div>
  );
};

StatisticalNumbers.propTypes = {
  number: P.string,
  numberAdd: P.string,
  unit: P.string,
  action: P.string,
};

export default StatisticalNumbers;
