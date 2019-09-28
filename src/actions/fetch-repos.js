export const fetchRepos = userLogin => ({
  type: 'FETCH_REPOS',
  payload: userLogin
});

export const fetchReposOK = response => ({
  type: 'FETCH_REPOS_OK',
  payload: response
});
