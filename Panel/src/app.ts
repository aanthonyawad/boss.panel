import * as bodyParser from 'body-parser';
import * as cookieParser from 'cookie-parser';
import * as cors from 'cors';
import * as express from 'express';
import * as helmet from 'helmet';
import { IController } from './interfaces/controller.interface';
import errorMiddleware from './middlewares/error.middleware';
class App{
    public app : express.Application;
    public port : number;
    constructor(controllers :IController [],port : number ){
        this.app = express();
        this.port = port;
        this.initializeMiddlewares();
        this.initializeControllers(controllers);
    }
    
    public listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the port ${this.port}`);

        });
    }

    private initializeMiddlewares() {
        this.app.use(cors());
        this.app.use(helmet());
        this.app.use(bodyParser.json());
        this.app.use(cookieParser());
    }

    private initializeControllers(controllers: IController[]) {

        controllers.forEach((controller) => {
            this.app.use('/', controller.router);
        });
        this.app.use(errorMiddleware);
    }
}
export default App;