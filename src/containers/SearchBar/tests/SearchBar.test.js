import React from 'react';
import { shallow, mount } from 'enzyme';
import { SearchBar } from '../SearchBar';
import { Spin } from 'antd';

describe('Search Bar Component', () => {
  it('renders without crashing', () => {
    shallow(<SearchBar users={[]} />);
  });
  it('should call a function when onChange', () => {
    const fn = jest.fn();
    const wrapper = shallow(<SearchBar users={[]} onSelectUser={fn} selectUser={fn} />);
    wrapper.instance().handleChange('test');
    expect(fn).toHaveBeenCalledWith('test');
  });
  it('should not trigger search when input is empty', () => {
    const fn = jest.fn();
    const wrapper = shallow(<SearchBar users={[]} searchUser={fn} />);
    wrapper.instance().handleSearch();
    expect(fn).toHaveBeenCalledTimes(0);
  });
  it('should display Spinner component when loading', () => {
    const wrapper = mount(<SearchBar loading={true} users={[]} />);
    const Spinner = wrapper.instance().showSpinner(true);
    expect(Spinner).toEqual(<Spin size="small"/>);
  });
});
