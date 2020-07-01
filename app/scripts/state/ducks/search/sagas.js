import {all, call, fork, put, takeEvery} from 'redux-saga/effects'
import {searchError, searchSuccess} from "./actions"

import axiosService from '../../../services/axiosService'
import {searchTypes} from "./types"

const service = new axiosService()

function* search(action) {
    try {
        const response = yield call(service.post, action.payload.data)

        if (response.statusCode === 0) {
            yield put(searchSuccess(response));
        } else {
            yield put(searchError(response));
        }
    } catch (err) {
        console.log(err)
    }
}

function* watchFetchRequest() {
    yield takeEvery(searchTypes.QUERY, search)
}

export default function* searchSaga() {
    yield all([fork(watchFetchRequest)])
}
