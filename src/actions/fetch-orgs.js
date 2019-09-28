export const fetchOrgs = userLogin => ({
  type: 'FETCH_ORGS',
  payload: userLogin
});

export const fetchOrgsOK = response => ({
  type: 'FETCH_ORGS_OK',
  payload: response
});
