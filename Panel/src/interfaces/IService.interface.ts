import { NextFunction, Request, Response } from 'express';

export interface IPartnerService{
    list(request: Request, response: Response, next: NextFunction);
    listOne(request: Request, response: Response, next: NextFunction);
    add(request: Request, response: Response, next: NextFunction);
    put(request: Request, response: Response, next: NextFunction);
    delete(request: Request, response: Response, next: NextFunction);
}