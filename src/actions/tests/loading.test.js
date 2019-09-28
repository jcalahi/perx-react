import * as actions from '../loading';
import * as types from '../../constants';

describe('loading action', () => {
  it('should create an action to trigger loading', () => {
    const name = 'isFetchingUsers';
    const expectedAction = {
      type: types.IS_LOADING,
      name,
      isLoading: true
    };
    expect(actions.setLoading(name, true)).toEqual(expectedAction);
  });
});
