import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Select, Spin } from 'antd';
import debounce from 'lodash/debounce';
// actions
import { searchUser, selectUser } from '../../actions/search-user';
// css
import './searchbar.css';

const { Option } = Select;

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.handleSearch = debounce(this.handleSearch, 400); // triggers search after some delay
  }

  handleChange = selectedUser => {
    this.props.onSelectUser(selectedUser);
    // controlled input value
    this.props.selectUser(selectedUser);
  }

  handleSearch = queryString => {
    if (queryString) {
      this.props.searchUser(queryString);
    }
  }

  showSpinner = (isLoading) => {
    return isLoading ? <Spin size="small" /> : null;
  }

  renderList = () => {
    const { users } = this.props;
    return users.map(({ avatar_url: avatar, id, login }) => {
      return (
        <Option key={id} value={login} label={login}>
          <img className="searchbar__image" src={avatar} alt={login} />
          <span>{login}</span>
        </Option>
      )
    });
  }

  render() {
    const { isFetchingUsers, selectedUser } = this.props;
    return (
      <Select
        className="searchbar"
        placeholder="Search Github users"
        filterOption={false}
        showArrow={false}
        onSearch={this.handleSearch}
        onChange={this.handleChange}
        optionLabelProp="label"
        notFoundContent={this.showSpinner(isFetchingUsers)}
        value={selectedUser}
        allowClear
        showSearch
      >
        {this.renderList()}
      </Select>
    );
  }
}

const mapStateToProps = ({ isFetchingUsers, selectedUser, users }) => ({
  users, // users list
  isFetchingUsers, // loader when fetching users
  selectedUser // user selected from list
});

const mapDispatchToProps = dispatch => ({
  searchUser: queryString => dispatch(searchUser(queryString)), // call github search api
  selectUser: selectedUser => dispatch(selectUser(selectedUser)) // controlled input value
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
