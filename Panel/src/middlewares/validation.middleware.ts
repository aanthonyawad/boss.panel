import { plainToClass } from 'class-transformer';
import { ClassType } from 'class-transformer/ClassTransformer';
import { validate, ValidationError } from 'class-validator';
import { RequestHandler } from 'express';
import ValidationException from '../exceptions/validation.exception';

interface IType {
    body?: ClassType<unknown>;
    query?: ClassType<unknown>;
    params?: ClassType<unknown>;
}

function validationMiddleware(type: IType, skipMissingProperties = false): RequestHandler {
    return (req, res, next) => {
        const validationPromises: Array<Promise<ValidationError[]>> = [];
        Object.entries(type).forEach(([key, value]) => {
            validationPromises.push(
                validate(plainToClass(value, req[key]), {
                    skipMissingProperties
                })
            );
        });

        Promise.all(validationPromises).then((errorGroups) => {
            errorGroups.forEach((errors) => {
                if (errors.length > 0) {
                    const message = errors.map((error: ValidationError) => error.toString()).join(', ');
                    return next(new ValidationException(message));
                }
            });
            return next();
        });
    };
}
export default validationMiddleware;