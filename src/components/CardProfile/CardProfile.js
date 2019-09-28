import React, { Fragment } from 'react';
import { Card } from 'antd';
// css
import './card-profile.css';

const { Meta } = Card;

export const CardDesciption = (props) => {
  return (
    <Fragment>
      <div><a href={props.link}>{props.link}</a></div>
      <div>ID: {props.id}</div>
    </Fragment>
  );
};

const CardProfile = ({ id, image, username, link }) => {
  return (
    <div className="card-profile">
      <Card hoverable cover={<img alt={username} src={image} />}>
        <Meta 
          title={username}
          description={<CardDesciption link={link} id={id} />}
        />
      </Card>
    </div>
  );
};

export default CardProfile;
