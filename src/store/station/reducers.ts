import {
    StationActionTypes,
    StationState,
    UPDATE_STATION_INFORMATION,
    UPDATE_STATION_STATUS,
    DELETE_STATION, StationInformation, StationStatus
} from "./types";

export const initialStationState: StationState = {
    information: [],
    informationIndex: {},
    status: [],
    statusIndex: {}
};

function generateIndex(array: Array<StationInformation|StationStatus>){
    return array.reduce(
        (acc, cur, index) =>
            ({...acc, [cur.station_id]: index}), {})
}

export function stationReducer(
    state = initialStationState,
    action: StationActionTypes
): StationState {
    switch (action.type) {
        case UPDATE_STATION_INFORMATION:
            return {
                ...state,
                information: action.payload,
                informationIndex: generateIndex(action.payload)
            };

        case UPDATE_STATION_STATUS:
            return {
                ...state,
                status: action.payload,
                statusIndex: generateIndex(action.payload)
            };

        case DELETE_STATION:
            let newInformation = state.information.filter(information => information.station_id !== action.payload);
            let newInformationIndex = generateIndex(newInformation);
            let newStatus = state.status.filter(status => status.station_id !== action.payload);
            let newStatusIndex = generateIndex(newStatus);

            return {
                information: newInformation,
                informationIndex: newInformationIndex,
                status: newStatus,
                statusIndex: newStatusIndex
            };

        default:
            return state;
    }
}
