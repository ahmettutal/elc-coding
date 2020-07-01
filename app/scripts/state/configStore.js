import {applyMiddleware, createStore} from 'redux';
import {rootReducer, rootSaga} from './ducks';
import sagaMiddleware from "./middlewares/sagas";

export default function configureStore(initialState) {

    let middleWares = applyMiddleware(sagaMiddleware)

    const store = createStore(rootReducer, initialState, middleWares);

    sagaMiddleware.run(rootSaga);
    return store;
}
