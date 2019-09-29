import React from 'react';
import { shallow, mount } from 'enzyme';
import CardProfileRepo from '../CardProfileRepo';
import { Card } from 'antd';

const { Meta } = Card;

describe('Card Profile Repo Component', () => {
  it('renders without crashing', () => {
    shallow(<CardProfileRepo />);
  });
  it('should have a callback function when', () => {
    const fn = jest.fn();
    const wrapper = shallow(<CardProfileRepo onCardClick={fn} />);
    wrapper.find('.card-repo').simulate('click');
    expect(fn).toHaveBeenCalled();
  });
  it('should have numOfForks prop', () => {
    const wrapper = mount(<CardProfileRepo numOfForks={1} />);
    expect(wrapper.props().numOfForks).toEqual(1);
  });
  it('should have numOfStars prop', () => {
    const wrapper = mount(<CardProfileRepo numOfStars={2} />);
    expect(wrapper.props().numOfStars).toEqual(2);
  });
});