  
import { Errors } from '../constants/errors';
import { StatusCodes } from '../constants/statusCodes';
import HttpException from './http.exception';

class SomeException extends HttpException {
    constructor(message: string) {
        const error = Errors.SomeError;
        super(StatusCodes.HandledError, error.code, error.message.replace(`{{message}}`, message));
    }
}

export default SomeException;