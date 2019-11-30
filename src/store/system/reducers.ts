import {SystemActionTypes, SystemState, UPDATE_SYSTEM_INFORMATION} from "./types";

export const initialSystemState: SystemState = {};

export function systemReducer(
    state = initialSystemState,
    action: SystemActionTypes
): SystemState {
    switch (action.type) {
        case UPDATE_SYSTEM_INFORMATION:
            return action.payload;
        default:
            return state;
    }
}
