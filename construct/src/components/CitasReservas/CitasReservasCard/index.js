import P from 'prop-types';
import React from 'react';

import './style.scss';
import './mediascreen.scss';

import BigTitle from '../../BigTitle';
import Button from '../../Button';

const CitasResercasCard = (props) => {
  var title = props.title;
  var texts = props.texts; // array
  var buttonText = props.buttonText;
  var buttonLink = props.buttonLink;

  return (
    <div className="component-CitasResercasCard-wrap">
      <BigTitle
        text={title}
        fontSize="30px"
      />

      <div className="component-CitasResercasCard-list">
        {texts.map((module, n) => {
          return <span key={n}>{texts[n]}</span>;
        })}
      </div>

      <Button
        name="btn-04"
        width="142px"
        type="redirect"
        target="_blank"
        text={buttonText}
        link={buttonLink}
      />
    </div>
  );
};

CitasResercasCard.propTypes = {
  title: P.string,
  texts: P.array,
  buttonText: P.string,
  buttonLink: P.string,
};

export default CitasResercasCard;
