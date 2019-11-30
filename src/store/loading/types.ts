export interface LoadingState {
    system: LoadEnum
    information: LoadEnum
    status: LoadEnum
}

export enum LoadEnum {
    UNINITIALIZED = 'UNINITIALIZED',
    REQUESTING = 'REQUESTING',
    SUCCESS = 'SUCCESS',
    FAILURE = 'FAILURE'
}