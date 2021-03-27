  
import { NextFunction, Request, Response } from 'express';
import { Errors } from '../constants/errors';
import { StatusCodes } from '../constants/statusCodes';
import HttpException from '../exceptions/http.exception';
import { IHttpError } from '../interfaces';
import { getError } from '../utils/response';

function errorMiddleware(error: HttpException, request: Request, response: Response, next: NextFunction) {
    const status = error.status || StatusCodes.UnhandledError;
    const code = error.code || Errors.UnexpectedError.code;
    const description = error.message || Errors.UnexpectedError.message;
    response.status(status).send(
        getError<IHttpError>({ code, description })
    );
}

export default errorMiddleware;