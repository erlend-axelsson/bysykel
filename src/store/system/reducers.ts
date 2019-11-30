import {SystemActionTypes, SystemState, UPDATE_SYSTEM_INFORMATION_SUCCESS} from "./types";

export const initialSystemState: SystemState = {};

export function systemReducer(
    state = initialSystemState,
    action: SystemActionTypes
): SystemState {
    switch (action.type) {
        case UPDATE_SYSTEM_INFORMATION_SUCCESS:
            return action.payload;
        default:
            return state;
    }
}
