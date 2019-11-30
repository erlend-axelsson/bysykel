export interface StationState {
    information: StationInformation[];
    informationIndex: {[key: string]: number}
    status: StationStatus[];
    statusIndex: {[key: string]: number}
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

export const UPDATE_STATION_INFORMATION = "UPDATE_STATION_INFORMATION";
export const UPDATE_STATION_STATUS = "UPDATE_STATION_STATUS";
export const DELETE_STATION = 'DELETE_STATION';

interface UpdateStationInformationAction {
    type: typeof UPDATE_STATION_INFORMATION;
    payload: StationInformation[];
}

interface UpdateStationStatusAction {
    type: typeof UPDATE_STATION_STATUS;
    payload: StationStatus[];
}

interface DeleteStationAction {
    type: typeof DELETE_STATION;
    payload: string
}

export type StationActionTypes = UpdateStationInformationAction | UpdateStationStatusAction | DeleteStationAction;