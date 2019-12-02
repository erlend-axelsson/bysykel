import { all, call, put, takeLatest } from 'redux-saga/effects';
import {get} from '../api/api';
import {
    UPDATE_SYSTEM_INFORMATION_FAILURE,
    UPDATE_SYSTEM_INFORMATION_REQUEST,
    UPDATE_SYSTEM_INFORMATION_SUCCESS
} from "./system/types";
import {
    UPDATE_STATION_INFORMATION_FAILURE, UPDATE_STATION_INFORMATION_REQUEST,
    UPDATE_STATION_INFORMATION_SUCCESS, UPDATE_STATION_STATUS_FAILURE, UPDATE_STATION_STATUS_REQUEST,
    UPDATE_STATION_STATUS_SUCCESS
} from "./station/types";
import {STATIONINFORMATIONPATH, STATIONSTATUSPATH, SYSTEMINFORMATIONPATH} from "../paths";

function* fetchStationStatus(){
    try {
        const status = yield call(get, STATIONSTATUSPATH);
        yield put({type: UPDATE_STATION_STATUS_SUCCESS, payload: status.data.stations});
    } catch (e) {
        console.error(e);
        yield put({type: UPDATE_STATION_STATUS_FAILURE, payload: e.message});
    }
}

function* fetchStationInformation(){
    try {
        const information = yield call(get, STATIONINFORMATIONPATH);
        yield put({type: UPDATE_STATION_INFORMATION_SUCCESS, payload: information.data.stations});
    } catch (e) {
        console.error(e);
        yield put({type: UPDATE_STATION_INFORMATION_FAILURE, payload: e.message});
    }
}

function* fetchSystemInformation(){
    try {
        const status = yield call(get, SYSTEMINFORMATIONPATH);
        yield put({type: UPDATE_SYSTEM_INFORMATION_SUCCESS, payload: status});
    } catch (e) {
        console.error(e);
        yield put({type: UPDATE_SYSTEM_INFORMATION_FAILURE, payload: e.message});
    }
}

export function* stationStatusSaga() {
    yield takeLatest(UPDATE_STATION_STATUS_REQUEST, fetchStationStatus);
}
export function* stationInformationSaga() {
    yield takeLatest(UPDATE_STATION_INFORMATION_REQUEST, fetchStationInformation);
}
export function* SystemInformationSaga() {
    yield takeLatest(UPDATE_SYSTEM_INFORMATION_REQUEST, fetchSystemInformation);
}

export default function* rootSaga() {
    yield all([
        stationStatusSaga(),
        stationInformationSaga(),
        SystemInformationSaga()
    ])
}