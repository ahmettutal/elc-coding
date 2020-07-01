import {searchTypes} from './types'

export const initialState = {
    query: ""
}

export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case searchTypes.QUERY:
            return {...state, query: action.payload}
        default:
            return state
    }
}
