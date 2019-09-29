import React from 'react';
import { shallow, mount } from 'enzyme';
import CardProfileGroup from '../CardProfileGroup';
import { Empty } from 'antd';

describe('Card Profile Group Component', () => {
  it('renders without crashing', () => {
    shallow(<CardProfileGroup />);
  });
  it('should take title as prop and display text', () => {
    const wrapper = shallow(<CardProfileGroup title="My Component" />);
    expect(wrapper.contains(<h2>My Component</h2>)).toEqual(true);
  });
  it('should pass datasource to function as children when data is available', () => {
    const fn = jest.fn();
    const mockData = [{key: 1, value: 'one'}];
    shallow(<CardProfileGroup dataSource={mockData} children={fn} />);
    expect(fn).toHaveBeenCalledWith(mockData);
  });
  it('should render Empty component when no data', () => {
    const wrapper = mount(<CardProfileGroup dataSource={[]} loading={false} />);
    expect(wrapper.find(Empty)).toHaveLength(1);
  });
});
