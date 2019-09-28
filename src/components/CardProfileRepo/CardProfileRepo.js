import React from 'react';
import { Card, Typography } from 'antd';
// css
import './card-profile-repo.css';

const { Meta } = Card;
const { Paragraph } = Typography;

const CardProfileRepo = (props) => {
  return (
    <div className="card-repo">
      <Card hoverable size="small">
        <Meta title={props.title} description={<Paragraph ellipsis={{ rows: 3 }}>{props.description}</Paragraph>} />
        <div className="card-repo__info">Forks: {props.numOfForks}</div>
        <div className="card-repo__info">Stars: {props.numOfStars}</div>
      </Card>
    </div>
  );
};

export default CardProfileRepo;
