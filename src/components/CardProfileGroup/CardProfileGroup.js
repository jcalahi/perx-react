import React from 'react';
import { Empty, Spin } from 'antd';
// css
import './card-profile-group.css';

const CardProfileGroup = (props) => {

  function renderChildren() {
    if (props.dataSource && props.dataSource.length > 0) {
      return props.children(props.dataSource);
    } else {
      return (
        <div style={{ width: '100%' }}>
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        </div>
      );
    }
  }

  return (
    <div className="card-group">
      <h2>{props.title}</h2>
      <div className="card-group__item">
        {props.loading && <Spin />}
        {!props.loading && renderChildren()}
      </div>
    </div>
  );
};

export default CardProfileGroup;
