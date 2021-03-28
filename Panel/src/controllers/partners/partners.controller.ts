import { NextFunction, Request, Response } from 'express';
import { Routes } from '../../constants/routes';
import validationMiddleware from '../../middlewares/validation.middleware';
import Controller from '../controller.abstract';
import { list, listWithinRange } from '../../services/Partners.service';
import RangeInParamsDto from '../../dtos/requests/partners/partners.requests.dto';
import IdInParamsDto from '../../dtos/requests/id-in-params.dto';

class PartnersController extends Controller {
    
    constructor() {
        super(Routes.Partners);
    }

    public initializeRoutes() {
        this.router.get(`${this.path}`, this.list);
        this.router.get(`${this.path}/:range`, validationMiddleware({ params: RangeInParamsDto }), this.listWithinRange);

    }
    private async list(request: Request, response: Response, next: NextFunction) {
        
        await list(request,response,next);
    }
    private async listWithinRange(request: Request, response: Response, next: NextFunction) {
        await listWithinRange(request,response,next);
    }
}
export default PartnersController;

