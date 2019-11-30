import {
    StationActionTypes,
    StationState,
    UPDATE_STATION_STATUS_SUCCESS, UPDATE_STATION_INFORMATION_SUCCESS
} from "./types";

export const initialStationState: StationState = {};

export function stationReducer(
    state = initialStationState,
    action: StationActionTypes
): StationState {
    switch (action.type) {
        case UPDATE_STATION_INFORMATION_SUCCESS: {
            const newState = state;
            for(let info of action.payload){
                newState[info.station_id] = {...newState[info.station_id], information: info};
            }
            return newState
        }

        case UPDATE_STATION_STATUS_SUCCESS:{
            const newState = state;
            for(let status of action.payload){
                newState[status.station_id] = {...newState[status.station_id], status: status};
            }
            return newState
        }
        default:
            return state;
    }
}
