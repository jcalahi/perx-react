import React from 'react';
// css
import './card-profile-group.css';

const CardProfileGroup = (props) => {
  return (
    <div className="card-group">
      <h2>{props.title}</h2>
      <div className="card-group__item">
        {props.children}
      </div>
    </div>
  );
};

export default CardProfileGroup;
