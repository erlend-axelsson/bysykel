export interface StationState {
    [key: string]: Station
}

export type Station = {
    information: StationInformation
    status: StationStatus
}

export type StationInformation = {
    station_id:	string;
    name: string;
    address: string;
    lat: number;
    lon: number;
    capacity: number;
}

export type StationStatus = {
    station_id:	string;
    is_installed: number;
    is_renting: number;
    is_returning: number;
    last_reported: number;
    num_bikes_available: number;
    num_docks_available: number;
}

export const UPDATE_STATION_INFORMATION_REQUEST = "UPDATE_STATION_INFORMATION_REQUEST";
export const UPDATE_STATION_INFORMATION_SUCCESS = "UPDATE_STATION_INFORMATION_SUCCESS";
export const UPDATE_STATION_INFORMATION_FAILURE = "UPDATE_STATION_INFORMATION_FAILURE";
export const UPDATE_STATION_STATUS_REQUEST = "UPDATE_STATION_STATUS_REQUEST";
export const UPDATE_STATION_STATUS_SUCCESS = "UPDATE_STATION_STATUS_SUCCESS";
export const UPDATE_STATION_STATUS_FAILURE = "UPDATE_STATION_STATUS_FAILURE";
export const DELETE_STATION = 'DELETE_STATION';

interface UpdateStationInformationActionSuccess {
    type: typeof UPDATE_STATION_INFORMATION_SUCCESS;
    payload: StationInformation[];
}

interface UpdateStationStatusActionSuccess {
    type: typeof UPDATE_STATION_STATUS_SUCCESS;
    payload: StationStatus[];
}

interface DeleteStationAction {
    type: typeof DELETE_STATION;
    payload: string
}

export type StationActionTypes =
    UpdateStationInformationActionSuccess | UpdateStationStatusActionSuccess | DeleteStationAction;