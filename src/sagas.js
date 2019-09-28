import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
// actions
import { searchUserOK } from './actions/search-user';
import { fetchOrgsOK } from './actions/fetch-orgs';
import { fetchReposOK } from './actions/fetch-repos';
import { setLoading } from './actions/loading'; 

import { GITHUB_SEARCH_API, GITHUB_USERS_API } from './constants';

export function* searchUser(action) {
  const requestURL = `${GITHUB_SEARCH_API}/search/users?q=${action.payload}`;
  try {
    yield put(setLoading('isFetchingUsers', true));
    const response = yield call(axios.get, requestURL);
    yield put(searchUserOK(response.data.items));
  } catch (err) {
    // error 
  } finally {
    yield put(setLoading('isFetchingUsers', false));
  }
}

export function* fetchOrgs(action) {
  const requestURL = `${GITHUB_USERS_API}/${action.payload}/orgs`;
  try {
    yield put(setLoading('isFetchingOrgs', true));
    const response = yield call(axios.get, requestURL);
    yield put(fetchOrgsOK(response.data));
  } catch (err) {
    // error
  } finally {
    yield put(setLoading('isFetchingOrgs', false));
  }
}

export function* fetchRepos(action) {
  const requestURL = `${GITHUB_USERS_API}/${action.payload}/repos`;
  try {
    yield put(setLoading('isFetchingRepos', true));
    const response = yield call(axios.get, requestURL);
    yield put(fetchReposOK(response.data));
  } catch (err) {
    // error
  } finally {
    yield put(setLoading('isFetchingRepos', false));
  }
}

export default function* () {
  yield takeLatest('SEARCH_USER', searchUser);
  yield takeLatest('FETCH_ORGS', fetchOrgs);
  yield takeLatest('FETCH_REPOS', fetchRepos);
}
