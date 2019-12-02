import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';

import {initialSystemState, systemReducer} from "./system/reducers";
import {initialStationState, stationReducer} from "./station/reducers";
import {initialLoadingState, loadingReducer} from './loading/reducers'
import {StationState} from "./station/types";
import {SystemState} from "./system/types";
import sagas from "./sagas";
import {LoadingState} from "./loading/types";

export interface ApplicationState {
    system: SystemState
    station: StationState
    loading: LoadingState
}

const rootReducer = combineReducers<ApplicationState>({
    system: systemReducer,
    station: stationReducer,
    loading: loadingReducer
});

export const initialState: ApplicationState = {
    system: initialSystemState,
    station: initialStationState,
    loading: initialLoadingState
};

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
    const middlewares = [sagaMiddleware];
    const middleWareEnhancer = applyMiddleware(...middlewares);

    const store = createStore(
        rootReducer,
        initialState,
        composeWithDevTools(middleWareEnhancer)
    );

    sagaMiddleware.run(sagas);

    return store;
}
