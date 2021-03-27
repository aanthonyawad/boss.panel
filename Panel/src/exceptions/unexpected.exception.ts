import { Errors } from '../constants/errors';
import { StatusCodes } from '../constants/statusCodes';
import HttpException from './http.exception';

class UnexpectedException extends HttpException {
    constructor(err: Error) {
        const error = Errors.UnexpectedError;
        super(StatusCodes.UnhandledError, error.code, error.message);
    }
}

export default UnexpectedException;