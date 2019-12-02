import {SystemActionTypes, SystemState, UPDATE_SYSTEM_INFORMATION_SUCCESS} from "./types";

export const initialSystemState: SystemState = {};

export function systemReducer(
    state = initialSystemState,
    action: SystemActionTypes
): SystemState {
    if (action.type === UPDATE_SYSTEM_INFORMATION_SUCCESS) {
        return action.payload;
    } else {
        return state;
    }
}
