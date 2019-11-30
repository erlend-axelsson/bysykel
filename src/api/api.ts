import axios from 'axios';
import {StationInformation, StationStatus} from "../store/station/types";
import {Action, AnyAction, Dispatch} from "redux";
import {SystemState} from "../store/system/types";

export function getSystemInformation(callback: (arg0: SystemState) => Action) {
    axios.get('loading/system_information').then(response => {
        callback(response.data as SystemState);
    })
}

export function getStationInformation(callback: (arg0: StationInformation[]) => Action) {
    axios.get('loading/station_information').then(response => {
        callback(response.data.data.stations as StationInformation[]);
    })
}

export function getStationStatus(callback: (arg0: StationStatus[]) => Action) {
    axios.get('loading/station_status').then(response => {
        callback(response.data.data.stations as StationStatus[]);
    })
}

export async function get(path: string) {
    const response = await fetch(path);
    return await response.json();
}