import React from 'react';
import { shallow, mount } from 'enzyme';
import CardProfile, { CardDesciption } from '../CardProfile';
import { Card } from 'antd';

describe('Card Description Component', () => {
  it('renders without crashing', () => {
    shallow(<CardDesciption />);
  });
  it('should display a link when passed as props', () => {
    const wrapper = mount(<CardDesciption link="link" />);
    expect(wrapper.props().link).toEqual('link');
  });
  it('should display an ID when passed as props', () => {
    const wrapper = mount(<CardDesciption id="testId" />);
    expect(wrapper.props().id).toEqual('testId');
  });
});

describe('Card Profile Component', () => {
  it('renders without crashing', () => {
    shallow(<CardProfile />);
  });
});
