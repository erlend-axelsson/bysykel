import axios from 'axios';
import {StationInformation, StationStatus} from "../store/station/types";
import {Action, AnyAction, Dispatch} from "redux";
import {SystemState} from "../store/system/types";

export function getSystemInformation(callback: (arg0: SystemState) => Action) {
    axios.get('api/system_information').then(response => {
        callback(response.data as SystemState);
    })
}

export function getStationInformation(callback: (arg0: StationInformation[]) => Action) {
    axios.get('api/station_information').then(response => {
        callback(response.data.data.stations as StationInformation[]);
    })
}

export function getStationStatus(callback: (arg0: StationStatus[]) => Action) {
    axios.get('api/station_status').then(response => {
        callback(response.data.data.stations as StationStatus[]);
    })
}

