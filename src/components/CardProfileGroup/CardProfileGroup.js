import React from 'react';
// css
import './card-profile-group.css';

const CardProfileGroup = (props) => {
  return (
    <div className="card-profile-group">
      <h2>{props.title}</h2>
      <div style={{ display: 'flex', margin: '0 -3px', flexFlow: 'wrap' }}>
        {props.children}
      </div>
    </div>
  );
};

export default CardProfileGroup;
