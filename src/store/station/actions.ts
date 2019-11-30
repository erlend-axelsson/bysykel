import {
    StationInformation,
    StationStatus,
    UPDATE_STATION_INFORMATION,
    UPDATE_STATION_STATUS,
    DELETE_STATION
} from "./types";

export function updateStationInformationArray(information: StationInformation[]) {
    return {
        type: UPDATE_STATION_INFORMATION,
        payload: information
    };
}

export function updateStationStatusArray(status: StationStatus[]) {
    return {
        type: UPDATE_STATION_STATUS,
        payload: status
    }
}

export function deleteStationArray(stationId: string) {
    return {
        type: DELETE_STATION,
        payload: stationId
    }
}

