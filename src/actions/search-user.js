import * as types from '../constants';

export const searchUser = queryString => ({
  type: types.SEARCH_USER,
  payload: queryString
});

export const searchUserOK = response => ({
  type: types.SEARCH_USER_OK,
  payload: response
});

export const selectUser = selectedUser => ({
  type: types.SELECT_USER,
  payload: selectedUser
});
