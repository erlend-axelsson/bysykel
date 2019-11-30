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

export const UPDATE_SYSTEM_INFORMATION = "UPDATE_SYSTEM_INFORMATION";

interface UpdateSystemInformation {
    type: typeof UPDATE_SYSTEM_INFORMATION;
    payload: SystemState;
}

export type SystemActionTypes = UpdateSystemInformation;