import { IResponseJSON } from '../interfaces';

export function getResponse<T>(response: T): IResponseJSON<T> {
    return { status: 'success', response :response , statusCode : 200,  };
}

export function getError<T>(response: T): IResponseJSON<T> {
    return { status: 'error', response : response ,  validationErrors :[] , statusCode : 400};
}