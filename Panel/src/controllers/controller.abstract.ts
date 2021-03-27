import { IController } from '../interfaces/controller.interface';
import { Router } from 'express';
import { Routes } from '../constants/routes';

abstract class Controller implements IController{
    public path : Routes;
    public router: Router;
    
    constructor(path : Routes){
        this.path = path;
        this.router = Router();
        this.initializeRoutes();
    }
    
    public abstract initializeRoutes(): void;
}
export default Controller;