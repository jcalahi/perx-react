import * as types from '../constants';

export const setLoading = (name, isLoading) => ({
  type: types.IS_LOADING,
  name,
  isLoading
});
