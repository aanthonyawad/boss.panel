import { IResponseJSON } from '../interfaces';

export function getResponse<T>(data: T): IResponseJSON<T> {
    return { status: 'success', data };
}

export function getError<T>(data: T): IResponseJSON<T> {
    return { status: 'error', data };
}