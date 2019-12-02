import {LoadEnum, LoadingState} from "./types";
import {Action} from "redux";
import {
    UPDATE_SYSTEM_INFORMATION_FAILURE,
    UPDATE_SYSTEM_INFORMATION_REQUEST,
    UPDATE_SYSTEM_INFORMATION_SUCCESS
} from "../system/types";
import {
    UPDATE_STATION_INFORMATION_FAILURE,
    UPDATE_STATION_INFORMATION_REQUEST,
    UPDATE_STATION_INFORMATION_SUCCESS,
    UPDATE_STATION_STATUS_FAILURE,
    UPDATE_STATION_STATUS_REQUEST,
    UPDATE_STATION_STATUS_SUCCESS
} from "../station/types";

export const initialLoadingState: LoadingState = {
    system: LoadEnum.UNINITIALIZED,
    information: LoadEnum.UNINITIALIZED,
    status: LoadEnum.UNINITIALIZED
};

export function loadingReducer(
    state = initialLoadingState,
    action: Action
): LoadingState {
    switch (action.type) {
        case UPDATE_SYSTEM_INFORMATION_REQUEST:
            return {
                ...state,
                system: LoadEnum.REQUESTING
            };
        case UPDATE_SYSTEM_INFORMATION_SUCCESS:
            return {
                ...state,
                system: LoadEnum.SUCCESS
            };
        case UPDATE_SYSTEM_INFORMATION_FAILURE:
            return {
                ...state,
                system: LoadEnum.FAILURE
            };
        case UPDATE_STATION_INFORMATION_REQUEST:
            return {
                ...state,
                information: LoadEnum.REQUESTING
            };
        case UPDATE_STATION_INFORMATION_SUCCESS:
            return {
                ...state,
                information: LoadEnum.SUCCESS
            };
        case UPDATE_STATION_INFORMATION_FAILURE:
            return {
                ...state,
                information: LoadEnum.FAILURE
            };
        case UPDATE_STATION_STATUS_REQUEST:
            return {
                ...state,
                status: LoadEnum.REQUESTING
            };
        case UPDATE_STATION_STATUS_SUCCESS:
            return {
                ...state,
                status: LoadEnum.SUCCESS
            };
        case UPDATE_STATION_STATUS_FAILURE:
            return {
                ...state,
                status: LoadEnum.FAILURE
            };
        default:
            return state;
    }
}
