import { Request } from 'express';

type Status = 'success' | 'error';

export interface IRequest extends Request {
    requestId: number;
}

export interface IResponseJSON<T> {
    status: Status;
    statusCode : number;
    validationErrors? : string [];
    response: T;
}