import * as actions from '../fetch-repos';
import * as types from '../../constants';

describe('fetch repositories actions', () => {
  it('should create an action to fetchRepos', () => {
    const user = 'jcalahi';
    const expectedAction = {
      type: types.FETCH_REPOS,
      payload: user
    };
    expect(actions.fetchRepos(user)).toEqual(expectedAction);
  });
  it('should create an action to fetchReposOK', () => {
    const arr = [];
    const expectedAction = {
      type: types.FETCH_REPOS_OK,
      payload: arr
    };
    expect(actions.fetchReposOK(arr)).toEqual(expectedAction);
  });
});