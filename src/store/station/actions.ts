import {
    UPDATE_STATION_INFORMATION_REQUEST,
    UPDATE_STATION_STATUS_REQUEST,
} from "./types";

export function updateStationInformationRequest() {
    return {
        type: UPDATE_STATION_INFORMATION_REQUEST,
    };
}

export function updateStationStatusRequest() {
    return {
        type: UPDATE_STATION_STATUS_REQUEST,
    }
}

