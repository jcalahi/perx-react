import React from 'react';
import { Card, Avatar } from 'antd';
// css
import './card-profile-org.css';

const { Meta } = Card;

const CardProfileOrg = (props) => {
  return (
    <div style={{ padding: '0 3px' }}>
      <Card style={{ width: 240, marginTop: 16 }} hoverable>
        <Meta
          avatar={<Avatar src={props.image} />}
          title={props.title}
        />
      </Card>
    </div>
  );
};

export default CardProfileOrg;
