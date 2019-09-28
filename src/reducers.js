const defaultState = {
  isFetchingUsers: false,
  isFetchingRepos: false,
  isFetchingOrgs: false,
  selectedUser: undefined, // antd issue. search placeholder breaks when null
  userData: {},
  users: []
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case 'IS_LOADING':
      return {
        ...state,
        [action.name]: action.isLoading
      };
    case 'SELECT_USER':
      const userData = state.users.find(user => user.login === action.payload);
      return {
        ...state,
        selectedUser: action.payload || undefined,
        userData: userData || {}
      };
    case 'SEARCH_USER_OK':
      return {
        ...state,
        users: action.payload
      };
    case 'FETCH_ORGS_OK':
      state.userData.orgs = action.payload;
      return state;
    case 'FETCH_REPOS_OK':
      state.userData.repos = action.payload;
      return state;
    default:
      return state;
  }
}
