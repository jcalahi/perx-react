import * as actions from '../search-user';
import * as types from '../../constants';

describe('search users actions', () => {
  it('should create an action to searchUser', () => {
    const user = 'jvc';
    const expectedAction = {
      type: types.SEARCH_USER,
      payload: user
    };
    expect(actions.searchUser(user)).toEqual(expectedAction);
  });
  it('should create an action to searchUsersOK', () => {
    const arr = [];
    const expectedAction = {
      type: types.SEARCH_USER_OK,
      payload: arr
    };
    expect(actions.searchUserOK(arr)).toEqual(expectedAction);
  });
  it('should create an action to set selectedUser', () => {
    const arr = 'unicorn';
    const expectedAction = {
      type: types.SELECT_USER,
      payload: arr
    };
    expect(actions.selectUser(arr)).toEqual(expectedAction);
  });
});