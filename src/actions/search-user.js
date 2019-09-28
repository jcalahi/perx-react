export const searchUser = queryString => ({
  type: 'SEARCH_USER',
  payload: queryString
});

export const searchUserOK = response => ({
  type: 'SEARCH_USER_OK',
  payload: response
});

export const selectUser = selectedUser => ({
  type: 'SELECT_USER',
  payload: selectedUser
});
