import * as actions from '../fetch-orgs';
import * as types from '../../constants';

describe('fetch organizations actions', () => {
  it('should create an action to fetchOrgs', () => {
    const user = 'jcalahi';
    const expectedAction = {
      type: types.FETCH_ORGS,
      payload: user
    };
    expect(actions.fetchOrgs(user)).toEqual(expectedAction);
  });
  it('should create an action to fetchOrgsOK', () => {
    const arr = [];
    const expectedAction = {
      type: types.FETCH_ORGS_OK,
      payload: arr
    };
    expect(actions.fetchOrgsOK(arr)).toEqual(expectedAction);
  });
});