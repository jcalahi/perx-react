import * as types from '../constants';

export const fetchRepos = userLogin => ({
  type: types.FETCH_REPOS,
  payload: userLogin
});

export const fetchReposOK = response => ({
  type: types.FETCH_REPOS_OK,
  payload: response
});
