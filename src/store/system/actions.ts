import {
    SystemState, UPDATE_SYSTEM_INFORMATION_REQUEST,
    UPDATE_SYSTEM_INFORMATION_SUCCESS
} from "./types";

export function updateSystemInformationRequest() {
    return {type: UPDATE_SYSTEM_INFORMATION_REQUEST}
}