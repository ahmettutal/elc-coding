import {combineReducers} from 'redux'
import {all, fork} from 'redux-saga/effects'
import {searchReducer} from './search/reducers'
import searchSaga from './search/sagas'

export const rootReducer = combineReducers({
    query: searchReducer
})

export function* rootSaga() {
    yield all([fork(searchSaga)])
}
