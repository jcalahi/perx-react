import React from 'react';
import { Card, Avatar } from 'antd';
// css
import './card-profile-org.css';

const { Meta } = Card;

const CardProfileOrg = (props) => {
  return (
    <div className="card-org">
      <Card className="card-org__item" hoverable>
        <Meta
          avatar={<Avatar src={props.image} />}
          title={props.title}
        />
      </Card>
    </div>
  );
};

export default CardProfileOrg;
