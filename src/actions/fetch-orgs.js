import * as types from '../constants';

export const fetchOrgs = userLogin => ({
  type: types.FETCH_ORGS,
  payload: userLogin
});

export const fetchOrgsOK = response => ({
  type: types.FETCH_ORGS_OK,
  payload: response
});
