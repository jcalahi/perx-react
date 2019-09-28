import React from 'react';
import { Card } from 'antd';
// css
import './card-profile.css';

const { Meta } = Card;

const CardDesciption = (props) => {
  return (
    <div>
      <div><a href={props.link}>{props.link}</a></div>
      <div>ID: {props.id}</div>
    </div>
  );
};

const CardProfile = ({ id, image, username, link }) => {
  return (
    <div className="card-profile">
      <Card style={{ width: 270 }} hoverable cover={<img alt={username} src={image} />}>
        <Meta 
          title={username}
          description={<CardDesciption link={link} id={id} />}
        />
      </Card>
    </div>
  );
};

export default CardProfile;
