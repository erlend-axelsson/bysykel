import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {initialSystemState, systemReducer} from "./system/reducers";
import {initialStationState, stationReducer} from "./station/reducers";
import {StationState} from "./station/types";
import {SystemState} from "./system/types";

export interface ApplicationState {
    system: SystemState
    station: StationState
}

const rootReducer = combineReducers<ApplicationState>({
    system: systemReducer,
    station: stationReducer
});

export const initialState: ApplicationState = {
    system: initialSystemState,
    station: initialStationState
};

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
    const middlewares = [thunk];
    const middleWareEnhancer = applyMiddleware(...middlewares);

    const store = createStore(
        rootReducer,
        initialState,
        composeWithDevTools(middleWareEnhancer)
    );

    return store;
}
