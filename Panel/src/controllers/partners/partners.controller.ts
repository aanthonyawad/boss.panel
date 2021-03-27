import { NextFunction, Request, Response } from 'express';
import { Routes } from '../../constants/routes';
import IdInParamsDto from '../../dtos/responses/id-in-params.dto';
import validationMiddleware from '../../middlewares/validation.middleware';
import Controller from '../controller.abstract';
import { add, deleteOne, list, listOne, put } from '../../services/Partners.service';

class PartnersController extends Controller {
    
    constructor() {
        super(Routes.Partners);
    }

    public initializeRoutes() {
        this.router.get(`${this.path}`, this.list);
        this.router.get(`${this.path}/:id`, validationMiddleware({ params: IdInParamsDto }), this.listOne);
        this.router.delete(`${this.path}/:id`, validationMiddleware({ params: IdInParamsDto }), this.deleteOne);
        this.router.post(`${this.path}`, this.addOne);
        this.router.post(`${this.path}`, this.putOne);
    }

    private async list(request: Request, response: Response, next: NextFunction) {
        
        await list(request,response,next);
    }

    private async listOne(request: Request, response: Response, next: NextFunction) {
        await listOne(request,response,next);
    }

    private async addOne(request: Request, response: Response, next: NextFunction){
        await add(request,response,next);
    }
    
    private async putOne(request: Request, response: Response, next: NextFunction){
        await put(request,response,next);
    }
    private async deleteOne(request: Request, response: Response, next: NextFunction){
        await deleteOne(request,response,next);
    }
}
export default PartnersController;

