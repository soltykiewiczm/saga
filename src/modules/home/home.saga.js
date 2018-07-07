import * as actions from './home.action';
import fetch from 'isomorphic-fetch';
import { call, put, takeEvery } from 'redux-saga/effects'

export function* getData() {
    try {
        const response = yield call(fetch, 'https://jsonplaceholder.typicode.com/albums');
        const data = yield response.json();
        yield put(actions.apiResult(data));
        }
        catch (e) {
        // catch
        }
}


export function* apiRequest() {
    console.log('api request');
    yield takeEvery(actions.API_REQUEST, getData);
}