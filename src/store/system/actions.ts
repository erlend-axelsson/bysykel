import {
    SystemState,
    UPDATE_SYSTEM_INFORMATION
} from "./types";

export function updateSystemInformation(information: SystemState) {
    return {
        type: UPDATE_SYSTEM_INFORMATION,
        payload: information
    };
}

