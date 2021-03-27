import { StatusCodes } from '../constants/statusCodes';

class HttpException extends Error {
    public status: StatusCodes;
    public code: string;
    public message: string;
    constructor(status: StatusCodes, code: string, message: string) {
        super(message);
        this.message = message;
        this.status = status;
        this.code = code;
    }
}

export default HttpException;