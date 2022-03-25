import P from 'prop-types';
import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.scss';

import BigTitle from '../BigTitle';

const ProcedimientosCards = (props) => {
  var procedimiento = props.procedimiento;
  var image = props.image;
  var title = props.title;
  var items = props.items; // array

  return (
    <NavLink
      to={'/procedimientos/' + procedimiento}
      className={({ isActive }) => (isActive ? ' nav-link-proc_active' : '')}
    >
      <div className="component-procedimento_card-wrap">
        <div
          className="component-procedimento_card-pic-img"
          style={{ backgroundImage: 'url(' + image + ')' }}
        ></div>

        <BigTitle
          text={title}
          fontSize="26px"
        />

        <div className="component-procedimento_card-list">
          {items.map((module, n) => {
            return (
              <ul key={n}>
                <li>
                  {' '}
                  <div className="ball"></div>
                  {items[n].item}
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    </NavLink>
  );
};

ProcedimientosCards.propTypes = {
  procedimiento: P.string,
  image: P.string,
  title: P.string,
  items: P.array,
};

export default ProcedimientosCards;
