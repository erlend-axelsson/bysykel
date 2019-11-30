export interface SystemState {
    last_updated?: number;
    ttl?: number;
    data?: SystemData
}

export type SystemData = {
    system_id: string
    language: string
    name: string
    operator: string
    timezone: string
    phone_number: string
    email: string
}

export const UPDATE_SYSTEM_INFORMATION_REQUEST = "UPDATE_SYSTEM_INFORMATION_REQUEST";
export const UPDATE_SYSTEM_INFORMATION_SUCCESS = "UPDATE_SYSTEM_INFORMATION_SUCCESS";
export const UPDATE_SYSTEM_INFORMATION_FAILURE = "UPDATE_SYSTEM_INFORMATION_FAILURE";

interface UpdateSystemInformationSuccess {
    type: typeof UPDATE_SYSTEM_INFORMATION_SUCCESS;
    payload: SystemState;
}

export type SystemActionTypes = UpdateSystemInformationSuccess;